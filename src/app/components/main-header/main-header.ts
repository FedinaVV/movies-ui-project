import { Component } from '@angular/core';
import {Registration} from '../registration/registration';
import {ApiService} from '../../services/api.service';
import {MatDialog} from '@angular/material/dialog';
import {Auth} from '../auth/auth';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main-header',
  imports: [RouterLink],
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

  openAuthDialog() {
    this.dialog.open(Auth, {
      width: '500px',
      height: '400px'
    })
  }
}
