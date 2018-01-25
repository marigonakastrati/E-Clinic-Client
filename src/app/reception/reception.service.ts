import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Country } from './country';
import { Headers } from '@angular/http';
import { Global } from '../global';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Receptionist } from './receptionist';
import { Schedule } from '../patient/schedule';

@Injectable()
export class ReceptionService {


    constructor(private _http: HttpClient, private _global: Global, private _router: Router) { }

    getPersonDetails(id) {
        return this._http.get<Receptionist[]>(this._global.uriApi + 'receptionist/find/' + id);
    }
    navigateTo(location) {
        this._router.navigate([location]);
    }
    //have problem to fetch data everytime...after we delete some values from database 
    getScheduleList() {
        return this._http
            .get<Schedule[]>(this._global.uriApi + 'schedule/findPending')
    }
    
    book(value: Schedule) {
        var dateBooked = new Date().toISOString().slice(0, 10); //return YYYY-MM-DD
        var timeBooked = new Date().toISOString()//return HH:mm
        return this._http.post(this._global.uriApi + 'bookAppointment/create/',
            {
                scheduleId: value.id,
                patientId: value.patientId,
                dateBooked: dateBooked,
                timeBooked: timeBooked,
                status: "Booked",
            },
            {
                responseType: 'text'
            }
        )
    }

}

