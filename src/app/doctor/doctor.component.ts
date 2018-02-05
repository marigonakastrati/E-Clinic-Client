import { Component, OnInit } from '@angular/core';
import { DoctorProfileService } from './profile/profile.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  currentProfile: any = {};
  doctorProfile: any;
  constructor(private _profileService: DoctorProfileService, private _loginService: LoginService,
    private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('role') != null) {
      this.initializeFields();
      this.getProfile();
    } else {
      //If user is not logged in redirect to login page
      this._profileService.navigateTo('/login');
    }
    
  }
   
  initializeFields() {
    let userId = localStorage.getItem('username');
    this._profileService.getPersonDetails(userId).subscribe(
      data => {
        this.currentProfile = data;
      }
    )
  }
  getProfile() {
    var id = localStorage.getItem('username');
    console.log(id)
    this._profileService.getPersonDetails(id).subscribe
      (
      data => this.doctorProfile = data
      )
  }
  getElementById(id) {
    return document.getElementById(id) as HTMLSelectElement;
  }
  logOut()
  {
    this._loginService.logOut();
    this.router.navigate(['login']);
  }

}
