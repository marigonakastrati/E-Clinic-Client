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
    if (!this.validateInput()) {
      localStorage.setItem("username", this.username);
      this._loginService.checkCredentials(this.username, this.password).subscribe
        (
        r => {
          var res = r.split(":");
          var role = res[0];
          var sessionId = res[1];
          if (role == "false") {
            console.log(role);
            localStorage.removeItem("username");
            localStorage.removeItem("sessionId");
            this.logedIn = false;
            this.$("userNameError").removeAttribute("hidden");
            this.$("passwordError").removeAttribute("hidden");
            console.log("login failed");
          } else if (role == "AdminClinic") {
            this.router.navigate(['/adminClinic']);
            localStorage.setItem("role", '/adminClinic');
            localStorage.setItem("sessionId", sessionId);
            this.logedIn = true;
            console.log("loged on a");
          } else if (role == "Doctor") {
            this.router.navigate(['/doctor']);
            localStorage.setItem("role", '/doctor');
            localStorage.setItem("sessionId", sessionId);
            this.logedIn = true;
            console.log("loged on d");
          } else if (role == "Nurse") {
            this.router.navigate(['/nurse']);
            localStorage.setItem("role", '/nurse');
            localStorage.setItem("sessionId", sessionId);
            this.logedIn = true;
            console.log("loged on n");
          } else if (role == "HRManager") {
            this.router.navigate(['/hrManager']);
            localStorage.setItem("role", '/hrManager');
            localStorage.setItem("sessionId", sessionId);
            this.logedIn = true;
            console.log("loged on h");
          } else if (role == "Receptionist") {
            this.router.navigate(['/reception']);
            localStorage.setItem("role", '/reception');
            localStorage.setItem("sessionId", sessionId);
            this.logedIn = true;
            console.log("loged on r");
          } else if (role == "Patient") {
            this.router.navigate(['/patient']);
            localStorage.setItem("role", '/patient');
            localStorage.setItem("sessionId", sessionId);
            this.logedIn = true;
            console.log("loged on r");
          }
        }
        );
    }

  }
  showUserScreen() {
    let role = localStorage.getItem('role');
    if (role != null)
      this.router.navigate([role]);
  }
    //validate the diagnoses field
    validateInput() {
      this.$("userNameError").setAttribute("hidden", "true");
      this.$("passwordError").setAttribute("hidden", "true");
      var validationFailed = false;
      if (this.username == null || this.username.length < 1) {
        validationFailed = true;
        this.$("userNameError").removeAttribute("hidden");
      }
      if (this.password == null || this.password.length < 1) {
        validationFailed = true;
        this.$("passwordError").removeAttribute("hidden");
      }
      console.log(validationFailed)
      return validationFailed;
    }
    $(id) {
      return document.getElementById(id) as HTMLSelectElement;
    }
}
