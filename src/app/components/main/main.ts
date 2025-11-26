import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MoviesList} from '../../models/models';
import {CommonModule} from '@angular/common';
import {firstValueFrom} from 'rxjs';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink

  ],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit {

  form = new FormGroup({
    name: new FormControl(),
    year: new FormControl()
  });

  movies: MoviesList | undefined;

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
   const movies = await firstValueFrom(this.apiService.getTestData())
      this.movies = movies;
      console.log(this.movies)
  }

  createMovie() {
    const nameMovie = this.form.controls.name.value;
    const yearMovie = this.form.controls.year.value;

    this.apiService.createMovie({name: nameMovie, year: yearMovie}).subscribe(() => {
     window.location.reload();
    })
  }

  deleteMovie(id: number) {
  this.apiService.deleteMovie(id).subscribe((resp) => {
    window.location.reload();
  })
  }

  /*editMovie(id: number) {
   const request: MoviesModel = {
      name: this.formMovies.controls.name.value,
      year: this.formMovies.controls.year.value
    }

    this.apiService.updateMovie(id, request).subscribe((resp) => {
      console.log(resp)
      //window.location.reload();
    })
  }*/
}
