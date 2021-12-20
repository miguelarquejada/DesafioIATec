import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MemberService } from 'src/app/shared/service/member.service';
import { Member } from 'src/app/shared/model/member.model';
import { Address } from 'src/app/shared/model/address.model';

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
    private rest: MemberService
  ) { }
    
  ngOnInit(): void {
    this.memberForm = this.fb.group({
      name: [null, [Validators.required]],
      isBaptized: [false, [Validators.required]],
      birthday: [null, [Validators.required]],
      baptismDate: [null],
      number: [null, [Validators.required]],
      houseStreet: [null, [Validators.required]],
      optionalAddOns: [null, [Validators.required]],
      cep: [null, [Validators.required]],
    });
  }

  onIsBaptizedChange() {
    let isBaptizedSelected = this.memberForm.value.isBaptized;
    if(isBaptizedSelected == 'true') {
      this.memberForm.get('baptismDate').setValidators([Validators.required]); // 5.Set Required Validator
      this.memberForm.get('baptismDate').updateValueAndValidity();
    } else {
      this.memberForm.get('baptismDate').clearValidators();
      this.memberForm.get('baptismDate').updateValueAndValidity();
    }
  }
    
  createMember(){
    console.log(this.memberForm.value)
    let member = new Member();
    member.address = new Address();
    member.name = this.memberForm.value.name;
    member.isBaptized = this.memberForm.value.isBaptized;
    member.birthday = this.memberForm.value.birthday;
    member.baptismDate = this.memberForm.value.baptismDate;
    member.address.number =  this.memberForm.value.number;
    member.address.houseStreet = this.memberForm.value.houseStreet;
    member.address.optionalAddOns = this.memberForm.value.optionalAddOns;
    member.address.cep = this.memberForm.value.cep;

    this.rest.postMember(member).subscribe(result => {});
    this.dialogRef.close(true);
    this.memberForm.reset();
    //window.location.reload();
  }

  cancel(){
    this.dialogRef.close(true);
    this.memberForm.reset();
  }
}
