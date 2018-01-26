import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { PatientProfileService } from '../profile/profile.service';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';
import { Schedule } from '../schedule';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  providers: [PatientService]
})
export class PatientAppointmentComponent implements OnInit {
  values: Schedule[];
  patientProfile: any;

  constructor(private _patientService: PatientService,
    private _profileService: PatientProfileService, private _loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.initializeList();
    this.getProfile();
  }

  initializeList() {
    this._patientService.getScheduleList().subscribe
      (
      data => {
        this.values = data
      }
      )

  }
  book(value: Schedule) {
    var id = localStorage.getItem('username');
    this._patientService.book(id, value).subscribe(
      r => this.initializeList()
    );
  }
  getProfile() {
    var id = localStorage.getItem('username');
    this._profileService.getPersonDetails(id).subscribe
      (
      data => this.patientProfile = data
      )
  }
  logOut()
  {
    this._loginService.logOut();
    this.router.navigate(['login']);
  }
}
