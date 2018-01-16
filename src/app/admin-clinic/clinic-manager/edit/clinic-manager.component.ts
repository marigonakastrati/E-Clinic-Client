import { Component, OnInit } from '@angular/core';
import { ClinicManagerService } from './../clinic-manager.service';
import { ClinicManager } from './../clinicManager';
import { clone } from 'lodash';
import { Gender } from './../gender';
import { MartialStatus } from './../martialStatus';
import { City } from './../city';
import { Religion } from './../religion';
import { Country } from './../country';
import { ProfileService } from '../../profile/profile.service';
import { LoginService } from '../../../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic-manager',
  templateUrl: './clinic-manager.component.html',
  styleUrls: ['./clinic-manager.component.css'],
  providers: [ClinicManagerService]
})
export class ACEditClinicManagerComponent implements OnInit {
  values: ClinicManager[];
  form: boolean = false;
  editForm: boolean = false;
  isNewForm: boolean;
  newValue: any = {};
  editedValue: any = {};
  genderList: Gender[];
  martialStatusList: MartialStatus[];
  birthCityList: City[];
  religionList: Religion[];
  cityList: City[];
  adminClinicProfile: any;

  constructor(private _clinicManagerService: ClinicManagerService,
         private _profileService: ProfileService, private _loginService:LoginService,
         private router: Router) { }

  ngOnInit() {

    this.initializeList();
    this.getProfile();

  }
  addPost(name): void {
    this._clinicManagerService.create(name).subscribe
      (
      r => console.log(r)
      );
  }
  showEditForm(value: ClinicManager) {
    if (!value) {
      this.form = false;
      return;
    }
    this.editForm = true;
    this.editedValue = clone(value);
    this.initializeGenderList();
    this.initializeMartialStatusList();
    this.initializeBirthCityList();
    this.initializeReligionList();
    this.initializeCityList();
  }

  showAddForm() {
    // resets form if edited product
    if (this.values.length) {
      this.newValue = {};
    }
    this.form = true;
    this.isNewForm = true;
  }
  update() {

    var genderTag = document.getElementById("gender") as HTMLSelectElement;
    var martialStatusTag = document.getElementById("martialStatus") as HTMLSelectElement;
    var birthCityTag = document.getElementById("birthCity") as HTMLSelectElement;
    var religionTag = document.getElementById("religion") as HTMLSelectElement;
    var cityTag = document.getElementById("city") as HTMLSelectElement;

    this.editedValue.gender = genderTag.value;
    this.editedValue.martialStatus = martialStatusTag.value;
    this.editedValue.birthCity = birthCityTag.value;
    this.editedValue.religion = religionTag.value;
    this.editedValue.city = cityTag.value;

    this._clinicManagerService.update(this.editedValue).subscribe(
      r => this.initializeList()
    );
    this.editForm = false;
    this.editedValue = {};
  }

  cancelNew() {
    this.newValue = {};
    this.form = false;
  }

  cancelEdits() {
    this.editedValue = {};
    this.editForm = false;
  }

  initializeList() {
    this._clinicManagerService.getList().subscribe
      (
      data => {
        this.values = data
      }
      )

  }
  delete(value): void {
    this._clinicManagerService.delete(value).subscribe
      (
      r => this.initializeList()
      );
  }
  deleteStatus(value): void {
    console.log(value.id)
    this._clinicManagerService.deleteStatus(value.id).subscribe
      (
      r => this.initializeList()
      );
  }

  initializeGenderList() {
    this._clinicManagerService.getGenderList().subscribe
      (
      data => {
        this.genderList = data
      }
      )
  }
  initializeMartialStatusList() {
    console.log("called");
    this._clinicManagerService.getMartialStatus().subscribe
      (
      data => {
        this.martialStatusList = data;
        console.log(data + " ms")
      }
      )
  }
  initializeBirthCityList() {
    this._clinicManagerService.getBirthCity().subscribe
      (
      data => {
        this.birthCityList = data;
      }
      )
  }
  initializeReligionList() {
    this._clinicManagerService.getReligion().subscribe
      (
      data => {
        this.religionList = data;
      }
      )
  }

  initializeCityList() {
    this._clinicManagerService.getCity().subscribe
      (
      data => {
        this.cityList = data;
      }
      )
  }
  getProfile() {
    var id = localStorage.getItem('username');
    console.log(id)
    this._profileService.getPersonDetails(id).subscribe
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
