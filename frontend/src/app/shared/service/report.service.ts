import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Report } from '../model/report.model';
import { Observable } from 'rxjs';
import { Member } from '../model/member.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  apiUrl = 'https://localhost:5001/report';
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

  public getReportBaptized(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(this.apiUrl+"/members/baptized");
  }
}
