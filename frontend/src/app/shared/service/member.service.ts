import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from '../model/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
    apiUrl = 'https://localhost:44349/member';
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    constructor(
        private httpClient: HttpClient
    ) {}

    public getMembers(): Observable<Member[]> {
      return this.httpClient.get<Member[]>(this.apiUrl);
    }

    public getMemberById(id: number): Observable<Member> {
      return this.httpClient.get<Member>(this.apiUrl  + "?id=" + id);
    }

    public postMember(member: Member): Observable<Member> {
        return this.httpClient.post<Member>(this.apiUrl, member, this.httpOptions);
    }

    public deleteMember(id: number): Observable<any> {
       return this.httpClient.delete<any>(this.apiUrl  + "/" + id);
    }

    public updateMember(id: number, updatedMember: Member): Observable<any> {
      return this.httpClient.put<any>(this.apiUrl  + "/" + id, updatedMember);
   }
}
