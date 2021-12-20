import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Address } from '../model/address.model';
import { Member } from '../model/member.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  convertMemberFormToMemberClass(memberForm: FormGroup): Member {
    let member = new Member();
    member.address = new Address();
    member.id = memberForm.value.id;
    member.name = memberForm.value.name;
    member.isBaptized = memberForm.value.isBaptized;
    member.birthday = memberForm.value.birthday;
    member.baptismDate = memberForm.value.baptismDate;
    member.address.number =  memberForm.value.number;
    member.address.houseStreet = memberForm.value.houseStreet;
    member.address.optionalAddOns = memberForm.value.optionalAddOns;
    member.address.cep = memberForm.value.cep;

    return member;
  }

  mensagemSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000
    });
  }
}
