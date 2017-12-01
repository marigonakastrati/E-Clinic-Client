import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http'
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ReceptionComponent } from './reception/reception.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { UserComponent } from './user/user.component';

const appRouters: Routes = [
    {path:'', component:UserComponent},
    {path:'reception', component:ReceptionComponent},
    {path:'administrator', component:AdministratorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ReceptionComponent,
    AdministratorComponent,
    UserComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouters)
  ],    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
