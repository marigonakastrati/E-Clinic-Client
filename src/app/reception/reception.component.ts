import { Component, OnInit, Input } from '@angular/core';
import { ReceptionService } from './reception.service';
import { Receptionist } from './receptionist';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { ProfileService } from '../admin-clinic/profile/profile.service';


@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css'],
  providers: [ReceptionService]
})
export class ReceptionComponent implements OnInit {

  receptionistProfile: Receptionist;


  constructor(private _receptionService: ReceptionService,private _loginService: LoginService,
    private router: Router, private _profileService: ProfileService) {

  }

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
    this._receptionService.getPersonDetails(id).subscribe
      (
      data => this.receptionistProfile = data
      )
  }

  logOut() {
    this._loginService.logOut();
    this.router.navigate(['login']);
  }
}
