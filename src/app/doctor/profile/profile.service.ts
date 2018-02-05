import { Injectable } from '@angular/core';
import { Global } from '../../global';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../doctor';

@Injectable()
export class DoctorProfileService {

  constructor(private _http: HttpClient, private _global: Global, private _router: Router) { }

  getPersonDetails(id) {
    return this._http.get<Doctor[]>(this._global.uriApi + 'doctor/find/' + id);
  }

  updateEntityName(value) {
    return this._http.put(this._global.uriApi + 'doctor/updateName',
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
updateEntityPassword(value) {
    return this._http.put(this._global.uriApi + 'doctor/updatePassword',
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
