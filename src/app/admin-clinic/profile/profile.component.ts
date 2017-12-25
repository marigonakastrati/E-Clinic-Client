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
  }

  initializeFields() {
    this._profileService.getPersonDetails(50500000).subscribe(
      data => {
        this.currentProfile = data;
      }
    )
  }

  saveProfile(currentProfile) {
    this._profileService.updateAdminClinicName(currentProfile).subscribe(data => {
      this.initializeFields();
    })

  }
  savePassword(currentProfile) {
    this._profileService.updateAdminClinicPassword(currentProfile).subscribe(
      data => {
        this.initializeFields();
      }
    )
  }
}
