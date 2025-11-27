import { Component } from '@angular/core';
import {Registration} from '../registration/registration';
import {ApiService} from '../../services/api.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-main-header',
  imports: [],
  templateUrl: './main-header.html',
  styleUrl: './main-header.scss',
})
export class MainHeader {

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog
  ) {}


  openRegistrDialog() {
    this.dialog.open(Registration, {
      width: '500px',
      height: '400px'
    })
  }
}
