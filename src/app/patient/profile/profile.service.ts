import { Injectable } from '@angular/core';
import { Global } from '../../global';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../patient';

@Injectable()
export class PatientProfileService {

  constructor(private _http: HttpClient, private _global: Global, private _router: Router) { }

  getPersonDetails(id) {
    return this._http.get<Patient[]>(this._global.uriApi + 'patient/find/' + id);
  }

  updateEntityName(value: Patient) {
    return this._http.put(this._global.uriApi + 'patient/updateName',
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
updateEntityPassword(value: Patient) {
    return this._http.put(this._global.uriApi + 'patient/updatePassword',
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
