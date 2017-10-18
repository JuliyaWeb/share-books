import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class FormHelper {

  constructor() {
  }

  public getErrors(form: FormGroup, validationMessages?: any) {
    let formErrors: Object = {};
    for (const field in validationMessages) {
      formErrors[field] = false;
    }
    for (const field in formErrors) {
      // clear previous error message (if any)
      formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = validationMessages[field];
        for (const key in control.errors) {
          formErrors[field] += messages[key] + ' ';
        }
      }
    }
    return formErrors;
  }


  public nameValidator(control: FormControl): { [key: string]: any } {
    let textRegexp = /^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/;
    if (control.value && !textRegexp.test(control.value)) {
      return {invalidName: true};
    }
  }

  public stringValidator(control: FormControl): { [key: string]: any } {
    let textRegexp = /^\w+([-\s]+\w+)*$/;
    if (control.value && !textRegexp.test(control.value)) {
      return {invalidString: true};
    }
  }

  public emailValidator(control: FormControl): { [key: string]: any } {
    let emailRegexp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (control.value && !emailRegexp.test(control.value)) {
      return {invalidEmail: true};
    }
  }

  public linkValidator(control: FormControl): { [key: string]: any } {
    let linkRegexp = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9]+-?)*[a-z0-9]+)(?:\.(?:[a-z0-9]+-?)*[a-z0-9]+)*(?:\.(?:[a-z]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    if (control.value && !linkRegexp.test(control.value)) {
      return {invalidLink: true};
    }
  }

  public domainValidator(control: FormControl): { [key: string]: any } {
    let domainRegexp = /^(([a-zA-Z]{1})|([a-zA-Z]{1}[a-zA-Z]{1})|([a-zA-Z]{1}[0-9]{1})|([0-9]{1}[a-zA-Z]{1})|([a-zA-Z0-9][a-zA-Z0-9-_]{1,61}[a-zA-Z0-9]))\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{2,30}\.[a-zA-Z]{2,3})$/;
    if (control.value && !domainRegexp.test(control.value)) {
      return {invalidDomain: true};
    }
  }

  public amountValidator(control: FormControl): { [key: string]: any } {
    let amountRegexp = /^(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/;
    if (control.value && !amountRegexp.test(control.value)) {
      return {invalidAmount: true};
    }
  }

  public matchingPasswordsValidator(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let password = group.controls[passwordKey];
      let passwordConfirmation = group.controls[passwordConfirmationKey];
      if (password.value !== passwordConfirmation.value) {
        return passwordConfirmation.setErrors({mismatchedPasswords: true})
      }
    }
  }
}
