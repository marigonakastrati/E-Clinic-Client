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
import { ACClinicManagerComponent } from './admin-clinic/clinic-manager/clinic-manager.component';
import { ACDoctorComponent } from './admin-clinic/doctor/doctor.component';
import { ACHRManagerComponent } from './admin-clinic/hr-manager/hr-manager.component';
import { ACNurseComponent } from './admin-clinic/nurse/nurse.component';
import { ACReceptionComponent } from './admin-clinic/reception/reception.component';



const appRouters: Routes = [
  { path: '', component: LoginComponent },
  { path: 'reception', component: ReceptionComponent },
  { path: 'adminClinic', component: AdministratorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'hrManager', component: ClinicManagerComponent },
  { path: 'nurse', component: NurseComponent },
  { path: 'adminClinic/profile', component: ACProfileComponent },
  { path: 'adminClinic/clinicmanager', component: ACClinicManagerComponent },
  { path: 'adminClinic/doctor', component: ACDoctorComponent },
  { path: 'adminClinic/nurse', component: ACNurseComponent },
  { path: 'adminClinic/hrManager', component: ACHRManagerComponent },
  { path: 'adminClinic/pharmacist', component: ACPharmacistComponent },
  { path: 'adminClinic/pharmacyManager', component: ACPharmacyManagerComponent },
  { path: 'adminClinic/receptionist', component: ACReceptionComponent }
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
    ACClinicManagerComponent,
    ACDoctorComponent,
    ACHRManagerComponent,
    ACNurseComponent,
    ACReceptionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [ReceptionService, LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ClinicHttpInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
