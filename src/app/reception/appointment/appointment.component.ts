import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';
import { ReceptionistProfileService } from '../profile/profile.service';
import { ReceptionService } from '../reception.service';
import { Schedule } from '../../patient/schedule';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class ReceptioniAppointmentComponent implements OnInit {
  values: Schedule[];
  patientProfile: any;

  constructor(private _patientService: ReceptionService,
    private _profileService: ReceptionistProfileService, private _loginService: LoginService,
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
    value.patientId = this.patientProfile.id;
    this._patientService.book(value).subscribe(
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
