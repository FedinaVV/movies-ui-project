import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MoviesModel} from '../../models/models';

@Component({
  standalone: true,
  selector: 'app-movie-info',
  imports: [RouterLink],
  templateUrl: './movie-info.html',
  styleUrl: './movie-info.scss',
})
export class MovieInfo implements OnInit {

  movie: MoviesModel | undefined;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.apiService.getMovieById(id).subscribe((resp) => {
        this.movie = resp;
        console.log(resp)
      })
    })

  }
}
