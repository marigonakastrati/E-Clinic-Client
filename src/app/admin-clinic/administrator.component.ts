import { Component, OnInit } from '@angular/core';
import { AdministratorService } from './administrator.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  adminClinicProfile: any;
  
  constructor(private _administratorService: AdministratorService, private _loginService:LoginService,
    private router: Router) { }

  ngOnInit() {
    this.getProfile();
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
