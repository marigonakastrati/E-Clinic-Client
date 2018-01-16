import { Injectable } from '@angular/core';
import {Doctor} from './doctor';
import { HttpClient } from '@angular/common/http';
import { Global } from '../../global';
import { Router } from '@angular/router';

@Injectable()
export class DoctorService {


  constructor(private _http: HttpClient, private _global: Global, private _router: Router) { }

  navigateTo(location) {
    this._router.navigate([location]);
  }

    getList() {
        return this._http
            .get<Doctor[]>(this._global.uriApi+'doctor/find')
    }

    changeStatus(id) {
        console.log(id)
        return this._http.post(this._global.uriApi+'doctor/deleteStatus/' + id, 
        {
            responseType: 'text'
        });
    }

    create(name) {
        return this._http.post(this._global.uriApi+'doctor/create',
            {
                countryName: name,
            },
            {
                responseType: 'text'
            })
    }

    update(clinicManager: Doctor) {
        return this._http.put(this._global.uriApi+'doctor/update/',
            {
                countryId: clinicManager.id,
                //countryName: clinicManager.name
            },
            {
                responseType: 'text'
            }
        )
    }
    delete(id) {
        return this._http.delete(this._global.uriApi+'doctor/delete/' + id.id, 
        {
            responseType: 'text'
        });
    }
}
