import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ACProfileComponent implements OnInit {

  currentProfile: any = {};

  constructor(private _profileService: ProfileService) { }

  ngOnInit() {
    this.initializeFields();
    //If user is not logged in redirect to login page
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
  saveProfile(currentProfile) {
    this._profileService.updateAdminClinicName(currentProfile).subscribe(
      data => {
        this.initializeFields();
        let divMessage = document.getElementsByClassName('message')[0];
        if (document.getElementsByTagName('h2')[0] != null) {
          divMessage.removeChild(document.getElementsByTagName('h2')[0]);
        }
        let h1Message = document.createElement('h2');
        //handle the exceptions
        h1Message.innerText = data;
        divMessage.appendChild(h1Message);
        //fade the message after 10 seconds
        setTimeout(function () {
          divMessage.removeChild(h1Message);
        }, 5000);
      })

  }

  //TODO send notification to UI with status using observable, clear the fields
  savePassword(currentProfile) {
    this._profileService.updateAdminClinicPassword(currentProfile).subscribe(
      data => {
        this.initializeFields();
        let divMessage = document.getElementsByClassName('message')[0];
        if (document.getElementsByTagName('h2')[0] != null) {
          divMessage.removeChild(document.getElementsByTagName('h2')[0]);
        }
        let h1Message = document.createElement('h2');
        //handle the exceptions
        h1Message.innerText = data;
        divMessage.appendChild(h1Message);
        //fade the message after 10 seconds
        setTimeout(function () {
          divMessage.removeChild(h1Message);
        }, 5000);
      }
    )
  }
}
