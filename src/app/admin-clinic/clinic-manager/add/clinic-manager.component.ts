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
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-clinic-manager',
  templateUrl: './clinic-manager.component.html',
  styleUrls: ['./clinic-manager.component.css'],
  providers: [ClinicManagerService]
})
export class ACAddClinicManagerComponent implements OnInit {
  values: ClinicManager[];
  form: boolean = false;
  isNewForm: boolean;
  newValue: any = {};
  editedValue: any = {};
  genderList: Gender[];
  martialStatusList: MartialStatus[];
  birthCityList: City[];
  religionList: Religion[];
  cityList: City[];
  countryList: Country[];
  adminClinicProfile: any;

  constructor(private _clinicManagerService: ClinicManagerService,
    private _profileService: ProfileService, private _loginService: LoginService,
    private router: Router) { }

  ngOnInit() {

    this.getProfile();
    this.initializeGenderList();
    this.initializeMartialStatusList();
    this.initializeBirthCityList();
    this.initializeReligionList();
    this.initializeCityList();
    this.initializeCountryList();

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

  save(editedValue) {

    var genderTag = this.getElementById("gender")
    var martialStatusTag = this.getElementById("martialStatus");
    var birthCityTag = this.getElementById("birthCity");
    var religionTag = this.getElementById("religion");
    var cityTag = this.getElementById("city");
    var countryTag = this.getElementById("country");

    this.editedValue.gender = genderTag.value;
    this.editedValue.martialStatus = martialStatusTag.value;
    this.editedValue.birthCity = birthCityTag.value;
    this.editedValue.religion = religionTag.value;
    this.editedValue.city = cityTag.value;
    this.editedValue.country = countryTag.value;
    console.log(editedValue.dateOfBirth)

    if (!this.validate()) {
      this._clinicManagerService.create(this.editedValue).subscribe(
        r => this.initializeList()
      );
      this.editedValue = {};
    }
  }

  cancelNew() {
    this.newValue = {};
    this.form = false;
  }

  cancelEdits() {
    this.editedValue = {};
    this.clearErrorId();
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
  changeStatus(value): void {
    this._clinicManagerService.deleteStatus(value.id).subscribe
      (
      r => this.initializeList()
      );
  }

  initializeGenderList() {
    console.log("gender")
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
    //TODO show only cities which belong to certain country
    this._clinicManagerService.getCity().subscribe
      (
      data => {
        this.cityList = data;
      }
      )
  }
  initializeCountryList() {
    this._clinicManagerService.getCountry().subscribe
      (
      data => {
        this.countryList = data;
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
  logOut() {
    this._loginService.logOut();
    this.router.navigate(['login']);
  }

  validate() {
    var validationFailed = false;
    var firstName: string = this.editedValue.firstname;
    var lastName: string = this.editedValue.lastname;
    var streetName: string = this.editedValue.addressName;
    var buildingNumber: string = this.editedValue.buildingNumber;
    var password: string = this.editedValue.currentPassword;
    var email: string = this.editedValue.email;
    var dateOfBirth: string = this.editedValue.dateOfBirth;
    var personId: string = this.editedValue.id;
    this.clearErrorId();

    if (firstName == null || firstName.length < 6) {
      validationFailed = true;
      this.getElementById("firstnameError").removeAttribute('hidden');
    }
    if (lastName == null || lastName.length < 6) {
      validationFailed = true;
      this.getElementById("lastnameError").removeAttribute('hidden');
    }
    if (streetName == null || streetName.length < 6) {
      validationFailed = true;
      this.getElementById("streetnameError").removeAttribute('hidden');
    }
    if (buildingNumber == null || buildingNumber.length < 6) {
      validationFailed = true;
      this.getElementById("buldingnumberError").removeAttribute('hidden');
    }
    if (password == null || password.length < 6) {
      validationFailed = true;
      this.getElementById("passwordError").removeAttribute('hidden');
    }
    if (email == null || email.match("(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))") != null) {
      validationFailed = true;
      this.getElementById("emailError").removeAttribute('hidden');
    }
    if (personId == null || personId.length < 6) {
      validationFailed = true;
      this.getElementById("personalIdError").removeAttribute('hidden');
    }
    let dateoB = new Date(dateOfBirth);
    let dnow = new Date();
    if (dateOfBirth == null || Math.abs((dnow.getFullYear() - dateoB.getFullYear())) < 18) {
      validationFailed = true;
      this.getElementById("dateOfBirthError").removeAttribute('hidden');
    }
    return validationFailed;
  }

  clearErrorId() {
    this.getElementById("firstnameError").setAttribute("hidden", "true");
    this.getElementById("lastnameError").setAttribute("hidden", "true");
    this.getElementById("streetnameError").setAttribute("hidden", "true");
    this.getElementById("buldingnumberError").setAttribute("hidden", "true");
    this.getElementById("passwordError").setAttribute("hidden", "true");
    this.getElementById("emailError").setAttribute("hidden", "true");
    this.getElementById("personalIdError").setAttribute("hidden", "true");
    this.getElementById("dateOfBirthError").setAttribute("hidden", "true");
  }
  getElementById(id) {
    return document.getElementById(id) as HTMLSelectElement;
  }
}
