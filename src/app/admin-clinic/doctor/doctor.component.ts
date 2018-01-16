import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor';
import { clone } from 'lodash';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  providers:[DoctorService]
})
export class ACDoctorComponent implements OnInit {


  values: Doctor[];
  form: boolean = false;
  editForm: boolean = false;
  isNewForm: boolean;
  newValue: any = {};
  editedValue: any = {};

  constructor(private _doctorService: DoctorService) { }

  ngOnInit() {
    this.initializeList();
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
  }

  showAddForm() {
    // resets form if edited product
    if (this.values.length) {
      this.newValue = {};
    }
    this.form = true;
    this.isNewForm = true;
  }

  save(doctor: Doctor) {
    if (this.isNewForm) {
      this._doctorService.create(doctor.firstname).subscribe(
        r => {
          this.initializeList();
        }
      );
    }
    this.form = false;
  }

  update() {
    this._doctorService.update(this.editedValue).subscribe(
      r =>this.initializeList()
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
}
