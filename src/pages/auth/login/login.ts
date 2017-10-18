import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterPage } from "../register/register";
import { TabsPage } from "../../tabs/tabs";
import { LoginForm, FormHelper } from "../../../core/helpers";
import { AuthService } from "../../../core/services/auth/auth-firebase.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [FormHelper]
})
export class LoginPage {
  public form: FormGroup;
  public formErrors: Object;

  constructor(public navCtrl: NavController,
              public authService: AuthService,
              private fb: FormBuilder,
              private fh: FormHelper) {
  }

  ionViewCanEnter() {
    this._buildForm();
  }

  private _buildForm() {
    this.form = this.fb.group({
      'email': ['', Validators.compose([Validators.required, this.fh.emailValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
    this.form.valueChanges
      .subscribe(data => {
        this.formErrors = this.fh.getErrors(this.form, LoginForm.validationMessages());
      });
  }

  public onSubmit(dataForm): void {
    if (this.form.valid) {
      this.authService.login(dataForm.email, dataForm.password)
        .then((succes) => {
         // this.navCtrl.setRoot(TabsPage);
        })
        .catch((error) => {
          console.log('23rfdgfdg',error);
        });
    }
  }

  public goToRegister() {
    this.navCtrl.setRoot(RegisterPage);
  }
}
