import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MoviesModel} from '../../models/models';
import {ApiService} from '../../services/api.service';

@Component({
  standalone: true,
  selector: 'app-edit-movie-dialog',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './edit-movie-dialog.html',
  styleUrl: './edit-movie-dialog.scss',
})
export class EditMovieDialog implements OnInit{

  form: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MoviesModel,
    protected apiService: ApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.data.name),
      year: new FormControl(this.data.year),
      poster: new FormControl(this.data.poster),
      rating: new FormControl(this.data.rating)
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  editMovie() {
    const request: MoviesModel = {
      name: this.form.controls.name.value,
      year: this.form.controls.year.value,
      poster: this.apiService.imageBase64(),
      rating: this.form.controls.rating.value,
    }

    if (this.data.id) {
      this.apiService.updateMovie(this.data.id, request).subscribe(() => {
        window.location.reload();
      })
    }
  }

}
