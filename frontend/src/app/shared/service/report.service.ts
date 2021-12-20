import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Report } from '../model/report.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  apiUrl = 'https://localhost:44349/report';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getReport(): Observable<Report> {
    return this.httpClient.get<Report>(this.apiUrl+"/members");
  }

  // public getReportBaptized(): Observable<Report> {
  //   return this.httpClient.get<Report>(this.apiUrl+"/members/baptized");
  // }
}
