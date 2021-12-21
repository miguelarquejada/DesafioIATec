import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MemberService } from 'src/app/shared/service/member.service';
import { UtilsService } from 'src/app/shared/service/utils.service';
import { Member } from 'src/app/shared/model/member.model';

@Component({
  selector: 'app-insert-member-dialog',
  templateUrl: './insert-member-dialog.component.html',
  styleUrls: ['./insert-member-dialog.component.css']
})
export class InsertMemberDialogComponent implements OnInit {
  public memberForm: FormGroup;
  
  constructor(
    public dialogRef: MatDialogRef<InsertMemberDialogComponent>,
    private fb: FormBuilder,
    private rest: MemberService,
    private utils: UtilsService,
    @Inject(MAT_DIALOG_DATA) public data: { isAddDialog: boolean, member?: Member }
  ) { }
    
  ngOnInit(): void {
    if(this.data.member != null) {
      this.memberForm = this.fb.group({
        id: [this.data.member.id],
        name: [this.data.member.name, [Validators.required]],
        isBaptized: [this.data.member.isBaptized, [Validators.required]],
        birthday: [new Date(this.data.member.birthday.replace(/(\d+[/])(\d+[/])/, '$2$1')), [Validators.required]],
        baptismDate: [this.data.member.baptismDate ? new Date(this.data.member.baptismDate.replace(/(\d+[/])(\d+[/])/, '$2$1')) : null],
        number: [this.data.member.address.number, [Validators.required]],
        houseStreet: [this.data.member.address.houseStreet, [Validators.required]],
        optionalAddOns: [this.data.member.address.optionalAddOns],
        cep: [this.data.member.address.cep, [Validators.required]],
      });
      console.log(this.memberForm.value)
      return;
    }

    this.memberForm = this.fb.group({
      name: [null, [Validators.required]],
      isBaptized: [false, [Validators.required]],
      birthday: [null, [Validators.required]],
      baptismDate: [null],
      number: [null, [Validators.required]],
      houseStreet: [null, [Validators.required]],
      optionalAddOns: [null],
      cep: [null, [Validators.required]],
    });
  }
    
  createMember(){
    let member = this.utils.convertMemberFormToMemberClass(this.memberForm);
    if(!this.memberForm.valid) {
      this.utils.mensagemSnackBar("Preencha todos os campos obrigatórios!");
      return;
    }

    this.rest.postMember(member).subscribe(result => {});
    this.dialogRef.close(true);
    this.memberForm.reset();
    window.location.href = "/";
  }

  editMember() {
    let member = this.utils.convertMemberFormToMemberClass(this.memberForm);
    if(!this.memberForm.valid) {
      this.utils.mensagemSnackBar("Preencha todos os campos obrigatórios!");
      return;
    }

    console.log(member);
    this.rest.updateMember(member.id, member).subscribe(result => {});
    this.dialogRef.close(true);
    this.memberForm.reset();
    window.location.href = "/";
  }

  cancel(){
    this.dialogRef.close(true);
    this.memberForm.reset();
  }
}
