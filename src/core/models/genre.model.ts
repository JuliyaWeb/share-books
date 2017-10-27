export class Genre {
  uid: number;
  title: string;

  constructor(data) {
    this.uid = data.uid;
    this.title = data.title;
  }
}
