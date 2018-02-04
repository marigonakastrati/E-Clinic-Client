import { Component, OnInit } from '@angular/core';
import { AdministratorService } from './administrator.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { ProfileService } from './profile/profile.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  adminClinicProfile: any;
  
  constructor(private _administratorService: AdministratorService, private _loginService:LoginService,
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
    this._administratorService.getPersonDetails(id).subscribe
      (
      data => this.adminClinicProfile = data
      )
  }
  logOut()
  {
    this._loginService.logOut();
    this.router.navigate(['login']);
  }
}
