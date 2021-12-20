import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/shared/model/member.model';
import { MemberService } from 'src/app/shared/service/member.service';
import { MatDialog } from '@angular/material/dialog';
import { InsertMemberDialogComponent } from '../insert-member-dialog/insert-member-dialog.component';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent implements OnInit {
  members: Member[];

  constructor(
    private rest: MemberService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(){
    this.rest.getMembers().subscribe(data => {
      this.members = data;

      this.members.forEach(member => {
        member.birthday = new Date(member.birthday).toLocaleDateString('pt-BR', {timeZone: 'UTC'});
        if(member.baptismDate)
          member.baptismDate = new Date(member.baptismDate).toLocaleDateString('pt-BR', {timeZone: 'UTC'});
      })
    })
  }

  deleteMember(id: number){
    this.rest.deleteMember(id).subscribe(data => {});
    window.location.reload();
  }

  updateMember(id: number, updatedMember: Member){
    this.rest.updateMember(id, updatedMember).subscribe(data => {})
    window.location.reload();
  }

  editMember(id: number){
    let member: Member = this.members.find(x => x.id == id);

    const dialogRef = this.dialog.open(InsertMemberDialogComponent, {
      minWidth: '400px',
      data: { 
        isAddDialog: false,
        member: member
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  displayedColumns: string[] = ['name', 'birthday', 'baptismDate', 'address.houseStreet', 'actions'];
}
