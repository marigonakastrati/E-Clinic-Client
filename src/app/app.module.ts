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
const appRouters: Routes = [
  { path: 'reception', component: ReceptionComponent },
  { path: 'adminClinic', component: AdministratorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'hrManager', component: ClinicManagerComponent },
  { path: 'nurse', component: NurseComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ReceptionComponent,
    AdministratorComponent,
    ClinicManagerComponent,
    DoctorComponent,
    LoginComponent,
    NurseComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [ReceptionService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
