import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm, FormHelper } from "../../../core/helpers";
import { LoginPage } from "../login/login";
import { AuthService } from "../../../core/services/auth/auth-firebase.service";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [FormHelper]
})

export class RegisterPage {
  public form: FormGroup;
  public formErrors: Object;

  constructor(public navCtrl: NavController,
              private fb: FormBuilder,
              public authService: AuthService,
              private fh: FormHelper) {
  }

  ionViewCanEnter() {
    this._buildForm();
  }

  public onSubmit(dataForm) {
    if (this.form.valid) {
      this.authService.register(dataForm.email, dataForm.confirm_password)
        .then((data) => {
          this.authService.createUser(data.uid, data.email);
          console.log('success', data);
        })
        .catch((error) => {
          console.log("Error:" + error);
        })
    }
  }

  private _buildForm() {
    this.form = this.fb.group({
      'email': ['', Validators.compose([Validators.required, this.fh.emailValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      'confirm_password': ['', Validators.compose([Validators.required])],
    }, {validator: this.fh.matchingPasswordsValidator('password', 'confirm_password')});

    this.form.valueChanges
      .subscribe(data => {
        this.formErrors = this.fh.getErrors(this.form, RegisterForm.validationMessages());
      });
  }

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

}
