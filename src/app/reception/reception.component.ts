import { Component, OnInit, Input } from '@angular/core';
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
  countryForm: boolean = false;
  editCountryForm: boolean = false;
  isNewForm: boolean;
  newCountry: any = {};
  editedCountry: any = {};
  private username: string;
  private password: string;

  constructor(private _receptionService: ReceptionService) {

  }

  ngOnInit() {
    /*this._http.get('http://localhost:26194/Eclinic/resource/address/addressList').
    toPromise().
    then(r => r.json()).
    then(r=> this.values = r); */
    this.username = localStorage.getItem("username");
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
    if (this.values.length) {
      this.newCountry = {};
    }
    this.countryForm = true;
    this.isNewForm = true;
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
