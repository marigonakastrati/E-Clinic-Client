import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ReceptionComponent } from './reception/reception.component';
import { AdministratorComponent } from './admin-clinic/administrator.component';
import { ClinicManagerComponent } from './hr-manager/hr-manager.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LoginComponent } from './login/login.component';
import { ReceptionService } from './reception/reception.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { NurseComponent } from './nurse/nurse.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClinicHttpInterceptor } from './clinic.interceptor';
import { ACProfileComponent } from './admin-clinic/profile/profile.component';
import { ACPharmacistComponent } from './admin-clinic/pharmacist/pharmacist.component';
import { ACPharmacyManagerComponent } from './admin-clinic/pharmacy-manager/pharmacy-manager.component';
import { ACEditClinicManagerComponent } from './admin-clinic/clinic-manager/edit/clinic-manager.component';
import { ACAddClinicManagerComponent } from './admin-clinic/clinic-manager/add/clinic-manager.component';
import { ACDoctorComponent } from './admin-clinic/doctor/doctor.component';
import { ACHRManagerComponent } from './admin-clinic/hr-manager/hr-manager.component';
import { ACNurseComponent } from './admin-clinic/nurse/nurse.component';
import { ACReceptionComponent } from './admin-clinic/reception/reception.component';
import { ProfileService } from './admin-clinic/profile/profile.service';
import { Global } from './global';
import { ClinicManagerService } from './admin-clinic/clinic-manager/clinic-manager.service';
import { DoctorService } from './admin-clinic/doctor/doctor.service';
import { AdministratorService } from './admin-clinic/administrator.service';
import { PatientComponent } from './patient/patient.component';
import { PatientAppointmentComponent } from './patient/appointment/appointment.component';
import { PatientPrescriptionComponent } from './patient/prescription/prescription.component';
import { PatientProfileComponent } from './patient/profile/profile.component';
import { PatientProfileService } from './patient/profile/profile.service';
import { PatientService } from './patient/patient.service';
import { ACAddDoctorComponent } from './admin-clinic/doctor/add/doctor.component';
import { ACEditDoctorComponent } from './admin-clinic/doctor/edit/doctor.component';
import { ACAddNurseComponent } from './admin-clinic/nurse/add/nurse.component';
import { ACEditNurseComponent } from './admin-clinic/nurse/edit/nurse.component';
import { NurseService } from './admin-clinic/nurse/nurse.service';



const appRouters: Routes = [
  { path: '', component: LoginComponent },
  { path: 'reception', component: ReceptionComponent },
  { path: 'adminClinic', component: AdministratorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'hrManager', component: ClinicManagerComponent },
  { path: 'nurse', component: NurseComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'adminClinic/profile', component: ACProfileComponent },
  { path: 'adminClinic/clinicmanager/edit', component: ACEditClinicManagerComponent },
  { path: 'adminClinic/clinicmanager/add', component: ACAddClinicManagerComponent },
  { path: 'adminClinic/doctor', component: ACDoctorComponent },
  { path: 'adminClinic/doctor/add', component: ACAddDoctorComponent },
  { path: 'adminClinic/doctor/edit', component: ACEditDoctorComponent },
  { path: 'adminClinic/nurse', component: ACNurseComponent },
  { path: 'adminClinic/nurse/add', component: ACAddNurseComponent },
  { path: 'adminClinic/nurse/edit', component: ACEditNurseComponent },
  { path: 'adminClinic/hrManager', component: ACHRManagerComponent },
  { path: 'adminClinic/pharmacist', component: ACPharmacistComponent },
  { path: 'adminClinic/pharmacyManager', component: ACPharmacyManagerComponent },
  { path: 'adminClinic/receptionist', component: ACReceptionComponent },
  { path: 'patient/appointment', component: PatientAppointmentComponent },
  { path: 'patient/prescription', component: PatientPrescriptionComponent },
  { path: 'patient/profile', component: PatientProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ReceptionComponent,
    AdministratorComponent,
    ClinicManagerComponent,
    DoctorComponent,
    LoginComponent,
    NurseComponent,
    ACProfileComponent,
    ACPharmacistComponent,
    ACPharmacyManagerComponent,
    ACAddClinicManagerComponent,
    ACEditClinicManagerComponent,
    ACDoctorComponent,
    ACHRManagerComponent,
    ACNurseComponent,
    ACReceptionComponent,
    PatientAppointmentComponent,
    PatientPrescriptionComponent,
    PatientProfileComponent,
    PatientComponent,
    ACAddDoctorComponent,
    ACEditDoctorComponent,
    ACAddNurseComponent,
    ACEditNurseComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [ReceptionService, LoginService, ProfileService, Global, ClinicManagerService, DoctorService, AdministratorService,
    PatientProfileService,PatientService,NurseService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ClinicHttpInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
