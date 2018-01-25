import { Injectable } from '@angular/core';
import { Global } from '../../global';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Receptionist } from '../receptionist';


@Injectable()
export class ReceptionistProfileService {

    constructor(private _http: HttpClient, private _global: Global, private _router: Router) { }

    getPersonDetails(id) {
        return this._http.get<Receptionist[]>(this._global.uriApi + 'receptionist/find/' + id);
    }

    updateEntityName(value: Receptionist) {
        return this._http.put(this._global.uriApi + 'receptionist/updateName',
            {
                id: value.id,
                firstName: value.firstname,
                lastName: value.lastname
            },
            {
                responseType: 'text'
            }
        )
    }
    updateEntityPassword(value: Receptionist) {
        return this._http.put(this._global.uriApi + 'receptionist/updatePassword',
            {
                id: value.id,
                currentPassword: value.currentPassword,
                newPassword: value.newPassword,
                confirmPassword: value.confirmPassword
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
