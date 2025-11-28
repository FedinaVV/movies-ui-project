import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {MatDialog} from '@angular/material/dialog';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-auth',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {

  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog
  ) {}


  closeDialog() {
    this.dialog.closeAll();
  }

  authUser() {
    const emailUser = this.form.controls.email.value;
    const passUser = this.form.controls.password.value;

    console.log(passUser)

    this.apiService.authUser({email: emailUser, password: passUser}).subscribe((resp) => {
      console.log(resp)
      //this.closeDialog();
      //window.location.reload();
    })
  }
}
