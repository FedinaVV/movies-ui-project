import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MoviesList, MoviesModel} from '../models/models';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private http = inject(HttpClient);

  private baseUrl = 'http://localhost:3000';
  constructor() {}

  getTestData() {
    return this.http.get<MoviesList>(`${this.baseUrl}/movies/list`);
  }

  getMovieById(id: number) {
    return this.http.get<MoviesModel>(`${this.baseUrl}/movies/${id}`)
  }

  createMovie(request: MoviesModel) {
    return this.http.post(`${this.baseUrl}/movies/create`, request);
  }

  updateMovie(id: number, request: MoviesModel) {
    return this.http.put(`${this.baseUrl}/movies/update/${id}`, request);
  }

  deleteMovie(id: number) {
    return this.http.delete(`${this.baseUrl}/movies/${id}`);
  }
}
