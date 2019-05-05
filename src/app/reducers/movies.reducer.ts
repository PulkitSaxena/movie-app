import { Action } from '@ngrx/store'

import * as AppActions from '../actions'
import { clone } from '../helpers/utility.helper'
import { IMovies } from '../models/movies.model';

export interface IState {
    isLoading: boolean
    movies: Array<IMovies>
    selectedMovie: IMovies
}

export const initialState: IState = {
    isLoading: true,
    movies: [],
    selectedMovie: { id: '', key: ''}
}

export function moviesReducer(state = initialState, action: Action): IState {
    switch(action.type) {
         case AppActions.ActionTypes.loadMoviesSuccess: {
            const payload = (action as AppActions.LoadMoviesSuccess).payload
            return { ...state, isLoading: false, movies: payload }
         }
         case AppActions.ActionTypes.readMovieDetailsSuccess: {
            const payload = (action as AppActions.ReadMovieDetailsSuccess).payload
            return { ...state, selectedMovie: payload }
         }
         default:
            return clone(state)
     }
}