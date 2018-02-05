import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminClinic } from './adminClinic';
import { Global } from '../global';
import { Router } from '@angular/router';

@Injectable()
export class AdministratorService {

  constructor(private _http: HttpClient, private _global: Global, private _router: Router) { }


  getPersonDetails(id) {
    return this._http.get<AdminClinic[]>(this._global.uriApi + 'adminClinic/find/' + id);
  }

}
