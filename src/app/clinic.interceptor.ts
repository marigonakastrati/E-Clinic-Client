import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ClinicHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let vheader = localStorage.getItem('role');
        const reqHeader = req.clone({ headers: req.headers.set('Authorization', vheader+'') });
        console.log(reqHeader.headers)
        return next.handle(reqHeader);
    }
}