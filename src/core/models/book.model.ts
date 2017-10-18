export class Book {
  uid: number;
  id: string;
  status: string;
  genre: string;
  author: string;
  title: string;
  picture: string;
  reting: any;
  testimonials: any;


  constructor(data) {
    this.uid = data.uid;
    this.id = data.id;
    this.author = data.author;
    this.title = data.title;
    this.picture = data.picture;
  }

}
