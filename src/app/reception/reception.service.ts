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
        let headers = new HttpHeaders().set('Authorization', 'auth-token');
        return this._http
            .get<Country[]>('http://localhost:15940/E-Clinic/api/country/find', { headers })
        //.map(r => r.json());
    }

    postReception(name) {
        return this._http.post('http://localhost:15940/E-Clinic/api/country/create',
            {
                countryName: name,
            })
    }

    deleteReceptionist(id) {
        return this._http.delete('http://localhost:15940/E-Clinic/api/country/delete/' + id.id);
    }
    updateReceptionist(country: Country) {
        return this._http.put('http://localhost:15940/E-Clinic/api/country/update/',
            {
                countryId: country.id,
                countryName: country.name
            }
        )
    }
}

