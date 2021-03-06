import { Component, OnInit } from '@angular/core';
import { DoctorService } from './../doctor.service';
import { Doctor } from './../doctor';
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
  selector: 'app-doctorr',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  providers: [DoctorService]
})
export class ACEditDoctorComponent implements OnInit {
  values: Doctor[];
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

  constructor(private _doctorService: DoctorService,
         private _profileService: ProfileService, private _loginService:LoginService,
         private router: Router) { }

  ngOnInit() {

    this.initializeList();
    this.getProfile();

  }
  addPost(name): void {
    this._doctorService.create(name).subscribe
      (
      r => console.log(r)
      );
  }
  showEditForm(value: Doctor) {
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

    this._doctorService.update(this.editedValue).subscribe(
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
    this._doctorService.getList().subscribe
      (
      data => {
        this.values = data
      }
      )

  }
  delete(value): void {
    this._doctorService.delete(value).subscribe
      (
      r => this.initializeList()
      );
  }
  deleteStatus(value): void {
    console.log(value.id)
    this._doctorService.deleteStatus(value.id).subscribe
      (
      r => this.initializeList()
      );
  }

  initializeGenderList() {
    this._doctorService.getGenderList().subscribe
      (
      data => {
        this.genderList = data
      }
      )
  }
  initializeMartialStatusList() {
    console.log("called");
    this._doctorService.getMartialStatus().subscribe
      (
      data => {
        this.martialStatusList = data;
        console.log(data + " ms")
      }
      )
  }
  initializeBirthCityList() {
    this._doctorService.getBirthCity().subscribe
      (
      data => {
        this.birthCityList = data;
      }
      )
  }
  initializeReligionList() {
    this._doctorService.getReligion().subscribe
      (
      data => {
        this.religionList = data;
      }
      )
  }

  initializeCityList() {
    this._doctorService.getCity().subscribe
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
