import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule } from '@angular/material/card';
import {MatDividerModule } from '@angular/material/divider';
import {MatChipsModule } from '@angular/material/chips';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule } from '@angular/material/icon';
import {MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { InsertMemberDialogComponent } from './views/home/insert-member-dialog/insert-member-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { ListMembersComponent } from './views/home/list-members/list-members.component';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReportMembersComponent } from './views/report-members/report-members.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { ReportMembersBaptizedComponent } from './views/report-members-baptized/report-members-baptized.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsertMemberDialogComponent,
    ListMembersComponent,
    ReportMembersComponent,
    NavBarComponent,
    ReportMembersBaptizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TextMaskModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatSnackBarModule,
    MatDividerModule,
    MatSelectModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
