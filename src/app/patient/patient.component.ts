import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientProfile: any;
  constructor(private _patientService: PatientService, private _loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.getProfile();
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
