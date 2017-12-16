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
  constructor(private _loginService: LoginService, private router: Router) { }

  ngOnInit() {
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
          console.log("login failed");
        } else if (r == "AdminClinic") {
          this.router.navigate(['/adminClinic']);
          console.log("loged on a");
        } else if (r == "Doctor") {
          this.router.navigate(['/doctor']);
          console.log("loged on d");
        } else if (r == "Nurse") {
          this.router.navigate(['/nurse']);
          console.log("loged on n");
        } else if (r == "HRManager") {
          this.router.navigate(['/hrManager']);
          console.log("loged on h");
        }else if (r == "Receptionist") {
          this.router.navigate(['/reception']);
          console.log("loged on r");
        }
      }
      );

  }
}
