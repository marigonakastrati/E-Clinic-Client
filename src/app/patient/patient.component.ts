import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { ProfileService } from '../admin-clinic/profile/profile.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientProfile: any;
  constructor(private _patientService: PatientService, private _loginService: LoginService,
    private router: Router, private _profileService: ProfileService) { }

  ngOnInit() {
    if (localStorage.getItem('role') != null) {
      this.getProfile();
    } else {
      //If user is not logged in redirect to login page
      this._profileService.navigateTo('/login');
    }
  }
  getProfile() {
    var id = localStorage.getItem('username');
    this._patientService.getPersonDetails(id).subscribe
      (
      data => this.patientProfile = data
      )
  }
  logOut() {
    this._loginService.logOut();
    this.router.navigate(['login']);
  }

}
