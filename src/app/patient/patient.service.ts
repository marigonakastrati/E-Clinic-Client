import { Injectable } from '@angular/core';
import { Global } from '../global';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Patient} from "./patient";

@Injectable()
export class PatientService {

  
  constructor(private _http: HttpClient, private _global: Global, private _router: Router) { }

  getPersonDetails(id) {
    return this._http.get<Patient[]>(this._global.uriApi + 'patient/find/' + id);
  }

}
