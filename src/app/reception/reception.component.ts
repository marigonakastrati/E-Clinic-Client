import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise'
import { forEach } from '@angular/router/src/utils/collection';
import { ReceptionService } from './reception.service';
import { NgModel } from '@angular/forms';
import { Country } from './country';
import { clone } from 'lodash';


@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css'],
  providers: [ReceptionService]
})
export class ReceptionComponent implements OnInit {

  values: Country[];
  isLoading = true;
  countryForm: boolean = false;
  editCountryForm:boolean=false;
  isNewForm: boolean;
  newCountry: any = {};
  editedCountry: any ={};

  constructor(private _receptionService: ReceptionService) {

  }

  ngOnInit() {

    this._receptionService.getReceptionList().subscribe
      (
      data => {
        this.isLoading = false;
        this.values = data
      }
      )
    /*this._http.get('http://localhost:26194/Health-care-Maven/resource/address/addressList').
    toPromise().
    then(r => r.json()).
    then(r=> this.values = r); */
  }

  deleteCountry(value): void {
    console.log(value)
    this._receptionService.deleteReceptionist(value);
  }

  addPost(name): void {
    this._receptionService.postReception(name).subscribe
      (
      r => console.log(r)
      );
  }
  showEditCountryForm(country: Country) {
    if (!country) {
      this.countryForm = false;
      return;
    }
    this.editCountryForm = true;
    this.editedCountry = clone(country);
  }

  showAddCountryForm() {
    // resets form if edited product
    if(this.values.length) {
      this.newCountry = {};
    }
    this.countryForm = true;
    this.isNewForm = true;
  }
  saveCountry(country: Country) {
    console.log(country.name+" component");
    if(this.isNewForm) {
      // add a new product
      this._receptionService.postReception(country.name);
    }
    this.countryForm = false;
  }

  
  updateCountry() {
    this._receptionService.updateReceptionist(this.editedCountry);
    this.editCountryForm = false;
    this.editedCountry = {};
  }

  cancelNewCountry() {
    this.newCountry = {};
    this.countryForm = false;
  }

  cancelEdits() {
    this.editedCountry = {};
    this.editCountryForm = false;
  }

}
