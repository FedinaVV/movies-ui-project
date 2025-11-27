import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApiService} from '../../services/api.service';
import {MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-add-movie-dialog',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './add-movie-dialog.html',
  styleUrl: './add-movie-dialog.scss',
})
export class AddMovieDialog {

  form = new FormGroup({
    name: new FormControl(),
    year: new FormControl()
  });

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog
  ) {}

  closeDialog() {
    this.dialog.closeAll();
  }

  createMovie() {
    const nameMovie = this.form.controls.name.value;
    const yearMovie = this.form.controls.year.value;

    this.apiService.createMovie({name: nameMovie, year: yearMovie}).subscribe(() => {
      this.closeDialog();
      window.location.reload();
    })
  }

}
