import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { DoctorService } from '../doctor.service';
import { DoctorProfileService } from '../profile/profile.service';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';
import { Prescription } from '../prescription';
import { BookAppointment } from '../bookAppointment';
import { Visit } from '../visit';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
  providers: [DoctorService]
})
export class DoctorPrescriptionComponent implements OnInit {

  searchMedicine;
  medicineList: Medicine[];
  doctorProfile: any;
  presciptionMedicineList = <Prescription>{};
  appointmentList: BookAppointment[];
  addPrescriptionForm;

  constructor(private _doctorService: DoctorService,
    private _profileService: DoctorProfileService, private _loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    //load profile
    this.getProfile();
    //load the list of bookings
    this.loadVisits();
  }

  //bind the search medicine method, to update the medicine table 
  fetchMedicines(searchMedicine) {
    this._doctorService.fetchMedicines(searchMedicine).subscribe(
      data => this.medicineList = data
    );
  }
  //add medicine listener, update the prescription table with new object of Medicine
  addMedicine(medicine: Medicine) {
    if (!this.validateMedicineInput(medicine)) {
      this.medicineList = this.medicineList.filter(e => e != medicine);
      this.presciptionMedicineList.medicines.push(medicine);
      console.log(this.presciptionMedicineList.medicines.length)
      console.log(medicine);
    }

  }

  //validate the add medicine form
  validateMedicineInput(medicine: Medicine) {
    this.$("fieldsError").setAttribute("hidden", "true");
    var validationFailed = false;
    if (medicine.description == null || medicine.description.length < 4) {
      validationFailed = true;
      this.$("fieldsError").removeAttribute("hidden");
    }
    if (medicine.daysToUse == null || medicine.daysToUse < 1) {
      validationFailed = true;
      this.$("fieldsError").removeAttribute("hidden");
    }
    if (medicine.timesPerday == null || medicine.timesPerday < 1) {
      validationFailed = true;
      this.$("fieldsError").removeAttribute("hidden");
    }
    console.log(validationFailed)
    return validationFailed;
  }
  //validate the diagnoses field
  validatePrescriptionInput() {
    this.$("prescriptionError").setAttribute("hidden", "true");
    var validationFailed = false;
    if (this.presciptionMedicineList.diagnoses == null || this.presciptionMedicineList.diagnoses.length < 4) {
      validationFailed = true;
      this.$("prescriptionError").removeAttribute("hidden");
    }
    console.log(validationFailed)
    return validationFailed;
  }
  //post the prescription form
  addPrescription() {
    console.log("start add prescription")
    console.log(this.presciptionMedicineList.diagnoses)
    console.log(this.presciptionMedicineList.medicines)
    console.log(this.presciptionMedicineList.dateStart)
    console.log(this.presciptionMedicineList.bookingAppointmentId)
    console.log("end add prescription")
    //validate the diagnoses
    if (!this.validatePrescriptionInput()) {
      //post request to store the prescription and visit
      this._doctorService.addPrescription(this.presciptionMedicineList).subscribe(
        e => {
          this.presciptionMedicineList = <Prescription>{};
          //set the div prescription form to hidde
          this.addPrescriptionForm = false;
        }
      )
      //update bookingappointment status to visited
      this._doctorService.updateBookingAppointment(this.presciptionMedicineList).subscribe(
        e => {
          //reload the bookingappointment list
          this.loadMedicines();
        }
      )

    }

  }

  getProfile() {
    var id = localStorage.getItem('username');
    console.log(id)
    this._profileService.getPersonDetails(id).subscribe
      (
      data => this.doctorProfile = data
      )
  }
  logOut() {
    this._loginService.logOut();
    this.router.navigate(['login']);
  }
  loadMedicines() {
    this._doctorService.loadMedicines().subscribe(
      data => this.medicineList = data
    );
  }
  loadVisits() {
    var id = localStorage.getItem('username');
    this._doctorService.loadvisits(id).subscribe(
      data => {
        this.appointmentList = data;
        console.log(data)
      }

    );
  }
  showAddPrescription(appointment: BookAppointment) {
    this.addPrescriptionForm = true;
    console.log(appointment.bookAppointmentId);
    //load medicines
    this.loadMedicines();
    //initialize the medicine list
    this.presciptionMedicineList.medicines = [];
    var dateBooked = new Date().toISOString().slice(0, 16); //return YYYY-MM-DD
    //set the start date/time to Visit
    this.presciptionMedicineList.dateStart = dateBooked;
    this.presciptionMedicineList.timeStart = dateBooked;
    //set the BookingAppointmentId to Visit
    this.presciptionMedicineList.bookingAppointmentId = appointment.bookAppointmentId;
  }
  cancelAddPrescription() {
    this.addPrescriptionForm = false;
  }
  $(id) {
    return document.getElementById(id) as HTMLSelectElement;
  }
}
