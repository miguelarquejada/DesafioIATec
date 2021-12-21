import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InsertMemberDialogComponent } from '../home/insert-member-dialog/insert-member-dialog.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addMember(): void {
    const dialogRef = this.dialog.open(InsertMemberDialogComponent, {
      minWidth: '400px',
      data: { 
        isAddDialog: true 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
