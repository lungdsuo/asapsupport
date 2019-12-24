import { Email } from './../models/email.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
//import { Email } from '../models/email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailApiServiceService {
  private emailApiUrl = 'https://us-central1-asapsupport-ea755.cloudfunctions.net/sendMail';
  constructor(private http: HttpClient) { }
  sendMail(emailModel: Email): Observable<any> {
    return this.http.post(this.emailApiUrl, emailModel);

  }
}
