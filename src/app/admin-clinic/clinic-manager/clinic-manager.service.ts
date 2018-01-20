import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../../global';
import { Router } from '@angular/router';
import { ClinicManager } from './clinicManager';
import { Gender } from './gender';
import { MartialStatus } from './martialStatus';
import { City } from './city';
import { Religion } from './religion';
import { Address } from './address';
import { Country } from '../../reception/country';

@Injectable()
export class ClinicManagerService {

    constructor(private _http: HttpClient, private _global: Global, private _router: Router) { }

    navigateTo(location) {
        this._router.navigate([location]);
    }
    //have problem to fetch data everytime...after we delete some values from database 
    getList() {
        return this._http
            .get<ClinicManager[]>(this._global.uriApi + 'clinicManager/find')
    }

    deleteStatus(id) {
        console.log(id)
        return this._http.post(this._global.uriApi + 'clinicManager/deleteStatus',
            {
                id: id,
            },
            {
                responseType: 'text'
            });
    }

    create(clinicManager: ClinicManager) {
        console.log(clinicManager.dateOfBirth+" service")
        return this._http.post(this._global.uriApi + 'clinicManager/create',
            {
                religion: clinicManager.religion,
                gender: clinicManager.gender,
                martialStatus: clinicManager.martialStatus,
                birthCity: clinicManager.birthCity,
                city: clinicManager.city,
                addressName: clinicManager.addressName,
                firstname: clinicManager.firstname,
                lastname: clinicManager.lastname,
                country: clinicManager.country,
                email: clinicManager.email,
                password: clinicManager.currentPassword,
                buildingNumber: clinicManager.buildingNumber,
                id:clinicManager.id,
                dateOfBirth:clinicManager.dateOfBirth


            },
            {
                responseType: 'text'
            })
    }

    update(clinicManager: ClinicManager) {
        return this._http.put(this._global.uriApi + 'clinicManager/update/',
            {
                id: clinicManager.id,
                religion: clinicManager.religion,
                gender: clinicManager.gender,
                martialStatus: clinicManager.martialStatus,
                birthCity: clinicManager.birthCity,
                city: clinicManager.city,
                addressName: clinicManager.addressName,
                firstname: clinicManager.firstname,
                lastname: clinicManager.lastname,

            },
            {
                responseType: 'text'
            }
        )
    }
    delete(id) {
        return this._http.delete(this._global.uriApi + 'clinicManager/delete/' + id.id,
            {
                responseType: 'text'
            });
    }
    getGenderList() {
        return this._http
            .get<Gender[]>(this._global.uriApi + 'gender/find')
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
