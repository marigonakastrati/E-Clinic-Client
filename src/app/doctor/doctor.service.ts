import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../global';
import { Router } from '@angular/router';
import { Medicine } from './medicine';
import { BookAppointment } from './bookAppointment';
import { Prescription } from './prescription';

@Injectable()
export class DoctorService {

  constructor(private _http: HttpClient, private _global: Global, private _router: Router) { }

  navigateTo(location) {
    this._router.navigate([location]);
  }

  fetchMedicines(value) {
    return this._http.get<Medicine[]>(this._global.uriApi + 'medicine/findByName/' + value)
  }
  loadMedicines() {
    return this._http.get<Medicine[]>(this._global.uriApi + 'medicine/find')
  }
  loadvisits(id) {
    return this._http.get<BookAppointment[]>(this._global.uriApi + 'bookAppointment/findByDoctorIdFormat/' + id)
  }
  addPrescription(value: Prescription) {
    return this._http.post(this._global.uriApi + 'visit/create',
      {
        diagnoses: value.diagnoses,
        medicines:value.medicines,
        bookingAppointmentId:value.bookingAppointmentId,
        dateStart:value.dateStart,
        dateEnd:value.dateEnd,
        timeStart:value.timeStart,
        timeEnd:value.timeEnd
      },
      {
        responseType: 'text'
      })
  }
  updateBookingAppointment(value: Prescription) {
    return this._http.put(this._global.uriApi + 'bookAppointment/updateStatus', 
      value.bookingAppointmentId
    ,
      {
        responseType: 'text'
      }
    )
  }
}
