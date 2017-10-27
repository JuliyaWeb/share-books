import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { User } from "../models/user.model";


@Injectable()
export class Session {
  private _AUTH_COOKIE_NAME: string;
  private _USER_STORAGE_NAME: string;


  constructor(private _cookieService: CookieService) {
    this._AUTH_COOKIE_NAME = 'token';
    this._USER_STORAGE_NAME = 'session';
  }

  clean() {
    this._cookieService.removeAll();
    localStorage.removeItem(this._USER_STORAGE_NAME);
  }

  get token(): string {
    return this._cookieService.get(this._AUTH_COOKIE_NAME) || '';
  }

  set token(value: string) {
    this._cookieService.put(this._AUTH_COOKIE_NAME, value);
  }

  get currentUser(): User {
    let data: string = localStorage.getItem(this._USER_STORAGE_NAME) || '';
    return new User(JSON.parse(data));
  }

  set currentUser(value: User) {
    localStorage.setItem(this._USER_STORAGE_NAME, JSON.stringify(value));
  }
}
