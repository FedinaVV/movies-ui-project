import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {MatDialog} from '@angular/material/dialog';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-registration',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './registration.html',
  styleUrl: './registration.scss',
})
export class Registration {

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

  createUser() {
    const emailUser = this.form.controls.email.value;
    const passUser = this.form.controls.password.value;

    console.log(emailUser, passUser)

    this.apiService.createUser({email: emailUser, password: passUser}).subscribe(() => {
      this.closeDialog();
      window.location.reload();
    })
  }
}
