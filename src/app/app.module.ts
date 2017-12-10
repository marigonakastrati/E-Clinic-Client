import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http'
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ReceptionComponent } from './reception/reception.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { UserComponent } from './user/user.component';
import { ClinicManagerComponent } from './clinic-manager/clinic-manager.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LoginComponent } from './reception/login/login.component';
import { ReceptionService } from './reception/reception.service';

const appRouters: Routes = [
    {path:'', component:UserComponent},
    {path:'reception', component:ReceptionComponent},
    {path:'administrator', component:AdministratorComponent},
    {path:'login', component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ReceptionComponent,
    AdministratorComponent,
    UserComponent,
    ClinicManagerComponent,
    DoctorComponent,
    LoginComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouters)
  ],    
  providers: [ReceptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
