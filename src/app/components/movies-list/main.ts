import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MoviesList} from '../../models/models';
import {CommonModule} from '@angular/common';
import {firstValueFrom} from 'rxjs';
import {RouterLink} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AddMovieDialog} from '../add-movie-dialog/add-movie-dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  standalone: true,
  selector: 'app-main',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit {

  public movies: MoviesList | undefined;
  public inputField = new FormControl('');
  public filteredMovies: MoviesList | undefined;
  public loading: boolean = true;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog
  ) {}

  async ngOnInit() {
   const movies = await firstValueFrom(this.apiService.getTestData())
    this.movies = movies;
    this.filteredMovies = movies;
    this.loading = false;
      console.log(this.movies);

      this.inputField.valueChanges.subscribe(value => {
        if (!value || value.trim().length === 0) {
          this.filteredMovies = movies;
          this.loading = false;
          return;
        } else {
          const decodedValue = decodeURIComponent(value);
          this.apiService.findMovie(decodedValue).subscribe(resp => {
            this.filteredMovies = resp;
            this.loading = false;
          })
        }

      })
  }

  openDialog() {
    this.dialog.open(AddMovieDialog, {
      width: '500px',
      height: '400px'
    })
  }

}
