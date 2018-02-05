import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';
import { ReceptionistProfileService } from '../profile/profile.service';
import { ReceptionService } from '../reception.service';
import { Schedule } from '../../patient/schedule';
import { Receptionist } from '../receptionist';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class ReceptioniAppointmentComponent implements OnInit {
  values: Schedule[];
  receptionistProfile: Receptionist;

  constructor(private _receptionistService: ReceptionService,
    private _profileService: ReceptionistProfileService, private _loginService: LoginService,
    private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('role') != null) {
      this.initializeList();
      this.getProfile();
    } else {
      //If user is not logged in redirect to login page
      this._profileService.navigateTo('/login');
    }
  }

  initializeList() {
    this._receptionistService.getScheduleList().subscribe
      (
      data => {
        this.values = data
      }
      )

  }
  book(value: Schedule) {
    this._receptionistService.book(value).subscribe(
      r => this.initializeList()
    );
  }
  getProfile() {
    var id = localStorage.getItem('username');
    this._profileService.getPersonDetails(id).subscribe
      (
      data => this.receptionistProfile = data
      )
  }
  logOut()
  {
    this._loginService.logOut();
    this.router.navigate(['login']);
  }
}
