import { Component, OnInit } from '@angular/core';
import { ReceptionComponent } from '../reception.component';
import { ReceptionService } from '../reception.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends ReceptionComponent {


  constructor(private receptionService: ReceptionService)
  {
    super(receptionService);
  }

}
