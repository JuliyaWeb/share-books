import { Genre } from './genre.model';

export class Book {
  uid: number;
  title: string;
  author: string;
  genre: string;

  constructor(data) {
    this.uid = data.uid;
  }

}
