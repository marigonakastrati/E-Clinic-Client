import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {

values= [{id:"1", name:"A"},{id:"2", name:"B"}];
  constructor(private _http: Http) {
    
  }

  ngOnInit() {
    this._http.get('http://localhost:15940/BookingEngine/resource/domain/countries/').toPromise().then(r => r.json()).then(r=> this.values = r);  
}


}
