import { Component, OnInit } from '@angular/core';
import { clone } from 'lodash';
import { Gender } from './../gender';
import { MartialStatus } from './../martialStatus';
import { City } from './../city';
import { Religion } from './../religion';
import { Country } from './../country';
import { PatientProfileService } from '../profile/profile.service';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { PrescriptionMedicine } from './prescription';
import { PatientPrescription } from './patientPrescription';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PatientPrescriptionComponent implements OnInit {
  values: PatientPrescription[];
  form: boolean = false;
  editForm: boolean = false;
  isNewForm: boolean;
  newValue: any = {};
  editedValue: PrescriptionMedicine[];
  genderList: Gender[];
  martialStatusList: MartialStatus[];
  birthCityList: City[];
  religionList: Religion[];
  cityList: City[];
  patientProfile: any;

  constructor(private _clinicManagerService: PatientService,
    private _profileService: PatientProfileService, private _loginService: LoginService,
    private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('role') != null) {
      this.initializeList();
      this.getProfile();
    } else {
      //If user is not logged in redirect to login page
      this._profileService.navigateTo('/login');
    }

  }

  showEditForm(value: PatientPrescription) {
    if (!value) {
      this.form = false;
      return;
    }
    this.editForm = true;
    //call the method for prescribed medicines
    this.initializePrescibedMedicineList(value.visitId);

  }

  update() {
/*
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
    this.editedValue = {};*/
  }

  cancelNew() {
    this.newValue = {};
    this.form = false;
  }

  cancelEdits() {
    this.editedValue = null;
    this.editForm = false;
  }

  initializeList() {
    console.log(this.patientProfile+"pid");
    var id = localStorage.getItem('username');
    this._clinicManagerService.getPrescriptionbyVisitList(id).subscribe
      (
      data => {
        this.values = data
        console.log(data)
      }
      )
  }
  initializePrescibedMedicineList(visitId) {
    console.log(this.patientProfile+"pid");
    var id = localStorage.getItem('username');
    this._clinicManagerService.getPrescibedMedicineList(id, visitId).subscribe
      (
      data => {
        this.editedValue = data
        console.log("pid");
        console.log(this.editedValue)
        console.log(data)
      }
      )
  }
  delete(value): void {
    this._clinicManagerService.delete(value).subscribe
      (
      r => this.initializeList()
      );
  }

  getProfile() {
    var id = localStorage.getItem('username');
    console.log(id + " profile")
    this._profileService.getPersonDetails(id).subscribe
      (
      data => {
      this.patientProfile = data;
        console.log(this.patientProfile);
        console.log("getprofile"+ this.patientProfile.id);
      })
  }
  logOut() {
    this._loginService.logOut();
    this.router.navigate(['login']);
  }
}
