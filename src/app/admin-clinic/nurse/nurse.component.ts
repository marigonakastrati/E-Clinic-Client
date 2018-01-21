import { Component, OnInit } from '@angular/core';
import { NurseService } from './nurse.service';
import { Nurse } from './nurse';
import { clone } from 'lodash';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css'],
  providers:[NurseService]
})
export class ACNurseComponent implements OnInit {


  values: Nurse[];
  form: boolean = false;
  editForm: boolean = false;
  isNewForm: boolean;
  newValue: any = {};
  editedValue: any = {};

  constructor(private _nurseService: NurseService) { }

  ngOnInit() {
    this.initializeList();
  }


  addPost(name): void {
    this._nurseService.create(name).subscribe
      (
      r => console.log(r)
      );
  }
  showEditForm(value: Nurse) {
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

  save(nurse: Nurse) {
    if (this.isNewForm) {
      this._nurseService.create(nurse).subscribe(
        r => {
          this.initializeList();
        }
      );
    }
    this.form = false;
  }

  update() {
    this._nurseService.update(this.editedValue).subscribe(
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
    this._nurseService.getList().subscribe
      (
      data => {
        this.values = data
      }
      )
  }
  delete(value): void {
    this._nurseService.delete(value).subscribe
      (
      r => this.initializeList()
      );
  }
}
