import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/shared/model/report.model';
import { ReportService } from 'src/app/shared/service/report.service';

@Component({
  selector: 'app-report-members',
  templateUrl: './report-members.component.html',
  styleUrls: ['./report-members.component.css']
})
export class ReportMembersComponent implements OnInit {
  report: Report;
  haveData: boolean;

  constructor(
    private rest: ReportService,
  ) { }

  ngOnInit(): void {
    this.getReport();
  }

  getReport(){
    this.rest.getReport().subscribe(data => {
      this.report = data;
      if(data.memberTotal > 0)
        this.haveData = true;

      if(this.report.mostRecentBaptism)
        this.report.mostRecentBaptism = new Date(this.report.mostRecentBaptism).toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    });
  }
}
