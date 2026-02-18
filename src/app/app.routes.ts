import { Routes } from '@angular/router';
import {Main} from './components/movies-list/main';
import {MovieInfo} from './components/movie-info/movie-info';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'movie/:id', component: MovieInfo },
];
