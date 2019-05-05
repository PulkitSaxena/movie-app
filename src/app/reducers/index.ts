import * as fromMovies from './movies.reducer'
import { ActionReducerMap, createSelector } from '@ngrx/store';

export interface IAppState {
  movies: fromMovies.IState
}

export const reducers: ActionReducerMap<IAppState> = {
  movies: fromMovies.moviesReducer
};

export const selectMovies = (state: IAppState) => state.movies;
 
export const selectMovieList = createSelector(
  selectMovies,
  (state: fromMovies.IState) => state.movies
);

export const selectSelectedMovie = createSelector(
  selectMovies,
  (state: fromMovies.IState) => state.selectedMovie
);