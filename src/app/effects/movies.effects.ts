import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap, withLatestFrom, filter } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import * as AppActions from '../actions'
import { MovieService } from '../services/movies.service'
import { IMovies } from '../models/movies.model';
import { IAppState, selectMovieList } from '../reducers';
import { movies } from '../services/movie.mock-data';

 
@Injectable()
export class MovieEffects {

  @Effect()
  loadMoviesIfNeeded$: Observable<Action> = this.actions$.pipe(
    ofType(AppActions.ActionTypes.loadMoviesIfNeeded),
    withLatestFrom(this.store.select(selectMovieList)),
    filter(([_,movieList]) => movieList.length === 0),
    switchMap(() => of(new AppActions.LoadMovies()))
  );
    
  @Effect()
  loadMovies$: Observable<Action> = this.actions$.pipe(
    ofType(AppActions.ActionTypes.loadMovies), 
    switchMap(() => this.moviesService.fetchMovies()),
    map((movies) => { 
        return new AppActions.LoadMoviesSuccess(movies)
    }),
    catchError((error) => {
        return of(new AppActions.LoadMoviesFail())
    })
  );

  @Effect()
  readMovieDetails$: Observable<Action> = this.actions$.pipe(
    ofType(AppActions.ActionTypes.readMovieDetails),
    map((action: AppActions.ReadMovieDetails) => action.payload),
    withLatestFrom(this.store.select(selectMovieList)),
    switchMap(([movieId, movieList]) => { 
        let movie = movieList.find(mv => mv.key === movieId )
        return of(new AppActions.ReadMovieDetailsSuccess(movie))
    })
  );
 
  constructor(private actions$: Actions, private moviesService: MovieService, private store: Store<IAppState>) {}
}