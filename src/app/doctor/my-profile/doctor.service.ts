import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../../global';
import { Router } from '@angular/router';
import { Doctor } from './doctor';
import { Gender } from './gender';
import { MartialStatus } from './martialStatus';
import { City } from './city';
import { Religion } from './religion';
import { Address } from './address';
import { Country } from '../../reception/country';

@Injectable()
export class DoctorService {

    constructor(private _http: HttpClient, private _global: Global, private _router: Router) { }

    navigateTo(location) {
        this._router.navigate([location]);
    }
    //have problem to fetch data everytime...after we delete some values from database 
    getList() {
        return this._http
            .get<Doctor[]>(this._global.uriApi + 'doctor/find')
    }

    deleteStatus(id) {
        console.log(id)
        return this._http.post(this._global.uriApi + 'doctor/deleteStatus',
            {
                id: id,
            },
            {
                responseType: 'text'
            });
    }

    create(doctor: Doctor) {
        return this._http.post(this._global.uriApi + 'doctor/create',
            {
                religion: doctor.religion,
                gender: doctor.gender,
                martialStatus: doctor.martialStatus,
                birthCity: doctor.birthCity,
                city: doctor.city,
                addressName: doctor.addressName,
                firstname: doctor.firstname,
                lastname: doctor.lastname,
                country: doctor.country,
                email: doctor.email,
                password: doctor.currentPassword,
                buildingNumber: doctor.buildingNumber


            },
            {
                responseType: 'text'
            })
    }

    update(doctor: Doctor) {
        return this._http.put(this._global.uriApi + 'doctor/update/',
            {
                id: doctor.id,
                religion: doctor.religion,
                gender: doctor.gender,
                martialStatus: doctor.martialStatus,
                birthCity: doctor.birthCity,
                city: doctor.city,
                addressName: doctor.addressName,
                firstname: doctor.firstname,
                lastname: doctor.lastname,

            },
            {
                responseType: 'text'
            }
        )
    }
    delete(id) {
        return this._http.delete(this._global.uriApi + 'doctor/delete/' + id.id,
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
