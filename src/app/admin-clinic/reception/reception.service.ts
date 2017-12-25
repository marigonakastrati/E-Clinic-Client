import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Country } from './country';
import { Headers } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Global } from '../../global';

@Injectable()
export class ReceptionService {
    constructor(private _http: HttpClient, private _global:Global) {

    }

    getReceptionList() {
        return this._http
            .get<Country[]>(this._global.uriApi+'country/find')
        //.map(r => r.json());
    }

    postReception(name) {
        return this._http.post(this._global.uriApi+'country/create',
            {
                countryName: name,
            },
            {
                responseType: 'text'
            })
    }

    deleteReceptionist(id) {
        return this._http.delete(this._global.uriApi+'country/delete/' + id.id, 
        {
            responseType: 'text'
        });
    }

    updateReceptionist(country: Country) {
        return this._http.put(this._global.uriApi+'country/update/',
            {
                countryId: country.id,
                countryName: country.name
            },
            {
                responseType: 'text'
            }
        )
    }
}

