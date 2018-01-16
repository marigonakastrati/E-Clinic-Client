import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Global } from '../global';

@Injectable()
export class LoginService {

  constructor(private _http: HttpClient, private _global: Global) {

  }


  checkCredentials() {
    let username = localStorage.getItem('username');
    let password = localStorage.getItem('password');
    return this._http.post(this._global.uriApi + 'login/auth',
      {
        userName: username,
        password: password
      },
      {
        responseType: 'text'
      });
  }
  logOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('role');
  }
}
