import { Genre } from './genre.model';
export class User {
  uid: number;
  user_name: string;
  email: string;
  picture: string;
  books: any;
  find_book : string;
  active_book : string;
  authors: any;
  genres: Array<Genre>;


  constructor(data) {
    this.uid = data.uid;
    this.user_name = data.user_name;
    this.email = data.email;
    this.picture = data.picture;
  }

  // get fullName(): string {
  //   return `${this.firstName} ${this.lastName}`;
  // }

  isValid(): boolean {
    return !!this.uid;
  }
}
