import { Injectable } from "@angular/core";
import { FirebaseService } from '../helpers/firebase-service';

@Injectable()

export class GenresService {
  private _genresData;
  constructor(private _fbService: FirebaseService) {
    this._initGenresData();
  }

  public setDataToDb(){
    this._genresData.forEach((el)=>{
      console.log(el);
      // this._fbService.getDbList('/literary-genres').push(el);
    })

  }
  // Good site https://www.livelib.ru/genres
  private _initGenresData() {
    return this._genresData = ['Бизнес-книги','Классическая литература','Зарубежная литература','Детские книги','Детективы','Фэнтези','Фантастика',
      'Современная проза','Приключения','Ужасы, мистика','Романы', 'Боевики','Психология','Поэзия и драматургия','Наука и образование','Дом, семья, хобби и досуг',
    'Комиксы','Эзотерика','Культура и искусство','Юмористическая литература','Красота и здоровье','Техническая летиратура', 'Эротика']
  }

}
