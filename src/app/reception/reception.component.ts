import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {

data: any = 'a';

  constructor(private _http: Http) {
    
  }

  ngOnInit() {
    this.getCountryList();
  }


private getCountryList()
    {
        return this._http.get('http://localhost:15940/BookingEngine/resource/domain/countries/').map((res:Response)=> res.json()).subscribe(data =>
        {
            this.data = data;
        });
    
    }

}
