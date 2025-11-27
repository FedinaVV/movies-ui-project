import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MoviesModel} from '../../models/models';
import {EditMovieDialog} from '../edit-movie-dialog/edit-movie-dialog';
import {MatDialog} from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'app-movie-info',
  imports: [RouterLink],
  templateUrl: './movie-info.html',
  styleUrl: './movie-info.scss',
})
export class MovieInfo implements OnInit {

  movie: MoviesModel | undefined;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.apiService.getMovieById(id).subscribe((resp) => {
        this.movie = resp;
      })
    })
  }

  openEditDialog() {
    this.dialog.open(EditMovieDialog, {
      data:  this.movie,
      width: '500px',
      height: '400px'
    })
  }

}
