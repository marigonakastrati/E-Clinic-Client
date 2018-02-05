import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../../global';
import { Router } from '@angular/router';
import { Nurse } from './nurse';
import { Gender } from './gender';
import { MartialStatus } from './martialStatus';
import { City } from './city';
import { Religion } from './religion';
import { Address } from './address';
import { Country } from '../../reception/country';

@Injectable()
export class NurseService {

    constructor(private _http: HttpClient, private _global: Global, private _router: Router) { }

    navigateTo(location) {
        this._router.navigate([location]);
    }
    //have problem to fetch data everytime...after we delete some values from database 
    getList() {
        return this._http
            .get<Nurse[]>(this._global.uriApi + 'nurse/find')
    }

    deleteStatus(id) {
        console.log(id)
        return this._http.post(this._global.uriApi + 'nurse/deleteStatus',
            {
                id: id,
            },
            {
                responseType: 'text'
            });
    }

    create(nurse: Nurse) {
        return this._http.post(this._global.uriApi + 'nurse/create',
            {
                religion: nurse.religion,
                gender: nurse.gender,
                martialStatus: nurse.martialStatus,
                birthCity: nurse.birthCity,
                city: nurse.city,
                addressName: nurse.addressName,
                firstname: nurse.firstname,
                lastname: nurse.lastname,
                country: nurse.country,
                email: nurse.email,
                password: nurse.currentPassword,
                buildingNumber: nurse.buildingNumber


            },
            {
                responseType: 'text'
            })
    }

    update(nurse: Nurse) {
        return this._http.put(this._global.uriApi + 'nurse/update/',
            {
                id: nurse.id,
                religion: nurse.religion,
                gender: nurse.gender,
                martialStatus: nurse.martialStatus,
                birthCity: nurse.birthCity,
                city: nurse.city,
                addressName: nurse.addressName,
                firstname: nurse.firstname,
                lastname: nurse.lastname,

            },
            {
                responseType: 'text'
            }
        )
    }
    delete(id) {
        return this._http.delete(this._global.uriApi + 'nurse/delete/' + id.id,
            {
                responseType: 'text'
            });
    }
    getGenderList() {
        return this._http
            .get<Gender[]>(this._global.uriApi + 'nurse/find')
    }
    getMartialStatus() {
        return this._http
            .get<MartialStatus[]>(this._global.uriApi + 'martialStatus/find')

    }
    getBirthCity() {
        return this._http
            .get<City[]>(this._global.uriApi + 'city/find')

    }
    getReligion() {
        return this._http
            .get<Religion[]>(this._global.uriApi + 'religion/find')

    }

    getCity() {
        return this._http
            .get<City[]>(this._global.uriApi + 'city/find')

    }
    getCountry() {
        return this._http
            .get<Country[]>(this._global.uriApi + 'country/find')

    }
}
