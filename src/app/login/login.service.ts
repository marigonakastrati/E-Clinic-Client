import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private _http: HttpClient) {

  }


  checkCredentials() {
    let username = localStorage.getItem('username');
    let password = localStorage.getItem('password');
    return this._http.post('http://localhost:15940/E-Clinic/api/login/auth',
      {
        userName: username,
        password: password
      },
      {
        responseType: 'text'
      });
  }

}
