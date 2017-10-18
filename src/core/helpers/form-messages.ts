export class LoginForm {
  email: string;
  password: string;

  constructor() {
  }

  static validationMessages(): Object {
    return {
      'password': {
        'required': 'Password is required.',
        'minlength': 'Password isn\'t long enough, minimum of 8 characters.'
      },
      'email': {
        'required': 'Email is required.',
        'invalidEmail': 'Invalid email address.'
      }
    }
  }
}

export class RegisterForm {
  email: string;
  password: string;
  confirm_password: string;

  constructor() {
  }

  static validationMessages(): Object {
    return {
      'email': {
        'required': 'Email is required.',
        'invalidEmail': 'Invalid email address.'
      },
      'password': {
        'required': 'Password is required.',
        'minlength': 'Password isn\'t long enough, minimum of 8 characters.'
      },
      'confirm_password': {
        'required': 'Confirm Password is required.',
        'mismatchedPasswords': 'Passwords do not match.'
      }
    }
  }
}
