import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ACProfileComponent implements OnInit {

  currentProfile: any = {};
  adminClinicProfile: any;

  constructor(private _profileService: ProfileService, private _loginService:LoginService,
    private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('role') != null) {
      this.initializeFields();
    } else {
      //If user is not logged in redirect to login page
      this._profileService.navigateTo('/login');
    }
    this.getProfile();
  }

  initializeFields() {
    let userId = localStorage.getItem('username');
    this._profileService.getPersonDetails(userId).subscribe(
      data => {
        this.currentProfile = data;
      }
    )
  }

  //update the profile. TODO send notification to UI with status using observable 
  saveProfile() {

    this._profileService.updateAdminClinicName(this.currentProfile).subscribe(
      data => {
        this.initializeFields();
      });

    if (!this.validatePassword()) {
      this._profileService.updateAdminClinicPassword(this.currentProfile).subscribe(
        data => {
          console.log("password edit");
          this.initializeFields();
        })
    }
    let divMessage = this.getElementById("saveMessage");
    divMessage.removeAttribute('hidden');
    //fade the message away after 10 seconds
    setTimeout(function () {
      divMessage.setAttribute("hidden", "true");
    }, 5000);

  }

  cancelEdits() {
    this.currentProfile.newPassword = "";
    this.currentProfile.confirmPassword = "";
    this.currentProfile.currentPassword = "";
  }

  validatePassword() {
    this.getElementById("newPasswordError").setAttribute("hidden", "true");
    this.getElementById("confirmPasswordError").setAttribute("hidden", "true");
    var validationFailed = false;
    if (this.currentProfile.newPassword == null && this.currentProfile.confirmPassword == null
      && this.currentProfile.currentPassword == null) {
      return true;
    }
    if (this.currentProfile.currentPassword != null && (this.currentProfile.newPassword != this.currentProfile.confirmPassword)) {
      validationFailed = true;
      this.getElementById("newPasswordError").removeAttribute('hidden');
      this.getElementById("confirmPasswordError").removeAttribute('hidden');
    }
    if (this.currentProfile.newPassword == null ||  this.currentProfile.confirmPassword == null) {
      validationFailed = true;
      this.getElementById("newPasswordError").removeAttribute('hidden');
      this.getElementById("confirmPasswordError").removeAttribute('hidden');
    }
  }
  getProfile() {
    var id = localStorage.getItem('username');
    console.log(id)
    this._profileService.getPersonDetails(id).subscribe
      (
      data => this.adminClinicProfile = data
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
