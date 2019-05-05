import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState, selectSelectedMovie, selectMovieList } from '../../../reducers';
import { ReadMovieDetails, LoadMoviesIfNeeded,  } from '../../../actions';
import { IMovies } from '../../../models/movies.model';

interface IParams {
  movieId: string
}

@Component({
  selector: 'app-movie-page-detail',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss']
})

export class MovieDetailPageComponent implements OnInit {
  movies$: Observable<IMovies[]>
  paramSubscription: Subscription
  movieKey: string
  movieDetails$: Observable<IMovies>

  // create private variables for ActivatedRoute and Store
  constructor(private activatedRoute: ActivatedRoute, private store: Store<IAppState>) { }

  // Dispatch LoadMoviesIfNeeded and LoadMovieDetails action to fetch data from store

  ngOnInit() {
    this.store.dispatch(new LoadMoviesIfNeeded())
    this.paramSubscription = this.activatedRoute.params.subscribe((params: IParams) => {
      this.movieKey = params.movieId
      this.store.dispatch(new ReadMovieDetails(this.movieKey));
    })
    this.movieDetails$ = this.store.select(selectSelectedMovie);
    this.movies$ = this.store.select(selectMovieList)
  }
}
