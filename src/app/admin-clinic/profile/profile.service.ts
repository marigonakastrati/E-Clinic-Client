import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminClinic } from './adminClinic';
import { Global } from '../../global';
import { Router } from '@angular/router';

@Injectable()
export class ProfileService {

    constructor(private _http: HttpClient, private _global: Global, private _router: Router) { }


    getPersonDetails(id) {
        return this._http.get<AdminClinic[]>(this._global.uriApi + 'adminClinic/find/' + id);
    }


    updateAdminClinicName(adminClinic: AdminClinic) {
        return this._http.put(this._global.uriApi + 'adminClinic/updateName/',
            {
                id: adminClinic.id,
                firstName: adminClinic.firstname,
                lastName: adminClinic.lastname
            },
            {
                responseType: 'text'
            }
        )
    }
    updateAdminClinicPassword(adminClinic: AdminClinic) {
        return this._http.put(this._global.uriApi + 'adminClinic/updatePassword/',
            {
                id: adminClinic.id,
                currentPassword: adminClinic.currentPassword,
                newPassword: adminClinic.newPassword,
                confirmPassword: adminClinic.confirmPassword
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
