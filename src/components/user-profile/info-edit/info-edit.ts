import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../core/models/user.model';
import { FirebaseService } from '../../../core/helpers/firebase-service';

@Component({
  selector: 'info-edit',
  templateUrl: 'info-edit.html',
})
export class InfoEditComponent {
  public user: User;
  public genresList: Array<Object>;
  public selectedGenres: Array<Object> = [];
  // forms
  public generalForm: FormGroup;
  public preferencesForm: FormGroup;

  constructor(private _fb: FormBuilder, private _fbService: FirebaseService) {
  }

  ngOnInit(): void {
    this._initForms();
    this._getGenresList();
  }

  private _initForms() {
    this.generalForm = this._fb.group({
      'user_name': [''],
      'active_book': [''],
      'find_book': ['']
    });
    // ***************************
    this.preferencesForm = this._fb.group({
      'authors': this._fb.array([this._fb.group({'author': ['']})]),
      'genres': ['']
    });
    this.preferencesForm.controls['genres'].valueChanges
      .subscribe(data => {
      this.selectedGenres = data});
    // ***************************
  }

  private _initAuthorField() {
    const control = <FormArray>this.preferencesForm.controls['authors'];
    let form = this._fb.group({
      'author': [''],
    });
    control.push(form);
  }

  public addAuthor() {
    this._initAuthorField();
  }

  public removeAuthor(i: number) {
    const control = <FormArray>this.preferencesForm.controls['authors'];
    control.removeAt(i);
  }

  private _getGenresList() {
    // TODO Create modal with List Genres
    this._fbService.getDbList('literary-genres').subscribe((data) => {this.genresList = data;});
  }

  // get data from form for request
  public serializeDataForRequest() {
    let data: Object = {};
    for(let item in this.generalForm.controls) {
      this.generalForm.controls[item].value && (data[item] = this.generalForm.controls[item].value);
    }
    console.log(data);
  }

}
