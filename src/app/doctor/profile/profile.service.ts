import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from './doctor';
import { Global } from '../../global';
import { Router } from '@angular/router';

@Injectable()
export class ProfileService {

    constructor(private _http: HttpClient, private _global: Global, private _router: Router) { }


    getPersonDetails(id) {
        return this._http.get<Doctor[]>(this._global.uriApi + 'doctor/find/' + id);
    }


    updateAdminClinicName(doctor: Doctor) {
        return this._http.put(this._global.uriApi + 'doctor/updateName/',
            {
                id: doctor.id,
                firstName: doctor.firstname,
                lastName: doctor.lastname
            },
            {
                responseType: 'text'
            }
        )
    }
    updateAdminClinicPassword(doctor: Doctor) {
        return this._http.put(this._global.uriApi + 'doctor/updatePassword/',
            {
                id: doctor.id,
                currentPassword: doctor.currentPassword,
                newPassword: doctor.newPassword,
                confirmPassword: doctor.confirmPassword
            },
            {
                responseType: 'text'
            }
        )
    }
    navigateTo(location) {
        this._router.navigate([location]);
    }
}
