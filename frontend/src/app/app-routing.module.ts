import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ReportMembersBaptizedComponent } from './views/report-members-baptized/report-members-baptized.component';
import { ReportMembersComponent } from './views/report-members/report-members.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'relatorio/geral',
    component: ReportMembersComponent
  },
  {
    path: 'relatorio/batizados',
    component: ReportMembersBaptizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
