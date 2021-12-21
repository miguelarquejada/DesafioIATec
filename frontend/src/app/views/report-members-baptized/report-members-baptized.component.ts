import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/shared/model/member.model';
import { ReportService } from 'src/app/shared/service/report.service';

@Component({
  selector: 'app-report-members-baptized',
  templateUrl: './report-members-baptized.component.html',
  styleUrls: ['./report-members-baptized.component.css']
})
export class ReportMembersBaptizedComponent implements OnInit {
  members: Member[];
  
  constructor(
    private rest: ReportService,
  ) { }

  ngOnInit(): void {
    this.getBaptizedMembers();
  }

  getBaptizedMembers(){
    this.rest.getReportBaptized().subscribe(data => {
      this.members = data;

      this.members.forEach(member => {
        member.birthday = new Date(member.birthday).toLocaleDateString('pt-BR', {timeZone: 'UTC'});
        if(member.baptismDate)
          member.baptismDate = new Date(member.baptismDate).toLocaleDateString('pt-BR', {timeZone: 'UTC'});
      })
    })
  }

  displayedColumns: string[] = ['name', 'birthday', 'baptismDate', 'address.houseStreet'];
}
