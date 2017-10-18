export class User {
  uid: number;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;


  constructor(data) {
    this.uid = data.uid;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.picture = data.picture;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  isValid(): boolean {
    return !!this.uid;
  }
}
