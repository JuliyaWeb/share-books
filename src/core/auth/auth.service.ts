import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../models/user.model";
import { Session } from "./session";
// TODO rxjs
import 'rxjs/add/operator/switchMap';
import { FirebaseService } from '../helpers/firebase-service';

@Injectable()

export class AuthService {
  public dbUsers: FirebaseListObservable<any[]>;

  constructor(private _fbService: FirebaseService,
              private _session: Session) {
  }

  private _newSession(token: string, uidUser: string) {
    this._session.token = token;
    this._initCurrentUser(uidUser);
  }

  initSession(token: string, uidUser: string) {
    if (token && uidUser) {
      this._newSession(token, uidUser);
    } else {
      this._restoreSession();
    }
  }

  // TODO check function
  private _restoreSession() {
    if (this.isActiveSession()) {
      console.info('_restoreSession', this._session.token);
      if (!this._session.currentUser.isValid()) {
        // this.getUserInfo().subscribe(
        //     (user) => {
        //       this._session.currentUser = user;
        //       console.info('this.userLoggedIn$.next', user);
        //       this.userLoggedIn$.next(user);
        //     }
        //   )
      } else {
        // this.userLoggedIn$.next(this.getUser());
      }
    }
  }

  isActiveSession(): boolean {
    return !!this._session.token;
  }

  getUser(): User {
    return this._session.currentUser;
  }

  register(email: string, password: string) {
    return this._fbService.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this._fbService.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((success) => {
          this._fbService.afAuth.auth.currentUser.getIdToken().then(
            (token: string) => {
              const uid = this._fbService.afAuth.auth.currentUser.uid;
              this.initSession(token, uid);
            })
            .catch((error) => {
              console.log('error123', error);
            })
        }
      )
  }

  createUser(uid: string, email: string) {
    this._fbService.setDbObject(`/users/${uid}`, {
      email: email,
      uid: uid
    });
  }

  private _initCurrentUser(uid: string) {
    this._fbService.getDbList(`users`).subscribe((data) => {
      const user = data.find((u) => u.$key == uid);
      user && (this._session.currentUser = user);
    });
  }

  logout() {
    this._fbService.afAuth.auth.signOut();
    this._session.clean();
  }
}
