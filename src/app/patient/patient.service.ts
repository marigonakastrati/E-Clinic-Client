import { Injectable } from '@angular/core';
import { Global } from '../global';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Patient } from "./patient";
import { Gender } from './gender';
import { MartialStatus } from './martialStatus';
import { City } from './city';
import { Religion } from './religion';
import { Address } from './address';
import { Country } from './country';
import { Schedule } from './schedule';
import { PrescriptionMedicine } from './prescription/prescription';
import { PatientPrescription } from './prescription/patientPrescription';

@Injectable()
export class PatientService {


  constructor(private _http: HttpClient, private _global: Global, private _router: Router) { }

  getPersonDetails(id) {
    return this._http.get<Patient[]>(this._global.uriApi + 'patient/find/' + id);
  }
  navigateTo(location) {
    this._router.navigate([location]);
  }
  //have problem to fetch data everytime...after we delete some values from database 
  getScheduleList() {
    return this._http
      .get<Schedule[]>(this._global.uriApi + 'schedule/find')
  }

  deleteStatus(id) {
    console.log(id)
    return this._http.post(this._global.uriApi + 'schedule/deleteStatus',
      {
        id: id,
      },
      {
        responseType: 'text'
      });
  }

  create(value: Patient) {
    return this._http.post(this._global.uriApi + 'patient/create',
      {
        religion: value.religion,
        gender: value.gender,
        martialStatus: value.martialStatus,
        birthCity: value.birthCity,
        city: value.city,
        addressName: value.addressName,
        firstname: value.firstname,
        lastname: value.lastname,
        country: value.country,
        email: value.email,
        password: value.currentPassword,
        buildingNumber: value.buildingNumber,
        id: value.id,
        dateOfBirth: value.dateOfBirth


      },
      {
        responseType: 'text'
      })
  }

  update(value: Patient) {
    return this._http.put(this._global.uriApi + 'clinicManager/update/',
      {
        id: value.id,
        religion: value.religion,
        gender: value.gender,
        martialStatus: value.martialStatus,
        birthCity: value.birthCity,
        city: value.city,
        addressName: value.addressName,
        firstname: value.firstname,
        lastname: value.lastname,

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

  book(value: Schedule) {
    var dateBooked = new Date().toISOString().slice(0,10); //return YYYY-MM-DD
    var timeBooked = new Date().toISOString()//return HH:mm
    return this._http.post(this._global.uriApi + 'bookAppointment/create/',
      {
        scheduleId: value.id,
        patientId: value.patientId,
        dateBooked: dateBooked,
        timeBooked: timeBooked,
        status: "Pending",
      },
      {
        responseType: 'text'
      }
    )
  }
  getPrescibedMedicineList(id, visitId)
  {
    return this._http
      .get<PrescriptionMedicine[]>(this._global.uriApi + 'prescription/find/'+id+"/"+visitId) 
  }

  getPrescriptionbyVisitList(id)
  {
    return this._http
      .get<PatientPrescription[]>(this._global.uriApi + 'prescription/findByVisit/'+id) 
  }
}
