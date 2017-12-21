import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Country } from './country';
import { Headers } from '@angular/http';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ReceptionService {
    constructor(private _http: HttpClient) {

    }

    getReceptionList() {
        return this._http
            .get<Country[]>('http://localhost:15940/E-Clinic/api/country/find')
        //.map(r => r.json());
    }

    postReception(name) {
        return this._http.post('http://localhost:15940/E-Clinic/api/country/create',
            {
                countryName: name,
            },
            {
                responseType: 'text'
            })
    }

    deleteReceptionist(id) {
        return this._http.delete('http://localhost:15940/E-Clinic/api/country/delete/' + id.id, 
        {
            responseType: 'text'
        });
    }

    updateReceptionist(country: Country) {
        return this._http.put('http://localhost:15940/E-Clinic/api/country/update/',
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

