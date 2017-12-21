import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  logedIn = false;
  constructor(private _loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.showUserScreen();
  }

  login() {
    localStorage.setItem("username", this.username);
    localStorage.setItem("password", this.password);
    this._loginService.checkCredentials().subscribe
      (
      r => {
        if (r == "false") {
          localStorage.removeItem("username");
          localStorage.removeItem("password");
          this.logedIn = false;
          console.log("login failed");
        } else if (r == "AdminClinic") {
          this.router.navigate(['/adminClinic']);
          localStorage.setItem("role", '/adminClinic');
          this.logedIn = true;
          console.log("loged on a");
        } else if (r == "Doctor") {
          this.router.navigate(['/doctor']);
          localStorage.setItem("role", '/doctor');
          this.logedIn = true;
          console.log("loged on d");
        } else if (r == "Nurse") {
          this.router.navigate(['/nurse']);
          localStorage.setItem("role", '/nurse');
          this.logedIn = true;
          console.log("loged on n");
        } else if (r == "HRManager") {
          this.router.navigate(['/hrManager']);
          localStorage.setItem("role", '/hrManager');
          this.logedIn = true;
          console.log("loged on h");
        } else if (r == "Receptionist") {
          this.router.navigate(['/reception']);
          localStorage.setItem("role", '/reception');
          this.logedIn = true;
          console.log("loged on r");
        }
      }
      );

  }

  showUserScreen() {
    let role = localStorage.getItem('role');
    if (role != null)
      this.router.navigate([role]);
  }
}
