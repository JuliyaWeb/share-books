import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable, } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()

export class FirebaseService {

  constructor(public afAuth: AngularFireAuth,
              private _db: AngularFireDatabase) {
  }

  public setDbObject(url: string, data: Object) {
    return this._db.object(url).set(data);
  }

  public getDbList(url: string):FirebaseListObservable<any> {
    return this._db.list(url);
  }

}
