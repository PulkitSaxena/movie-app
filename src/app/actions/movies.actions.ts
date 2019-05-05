import { Action } from '@ngrx/store';
import { ActionTypes }  from './types'
import { IMovies } from '../models/movies.model';

export class PerformNoOperation implements Action {
    readonly type = ActionTypes.noOperation;
}

export class LoadMoviesIfNeeded implements Action {
    readonly type = ActionTypes.loadMoviesIfNeeded;
}

export class LoadMovies implements Action {
    readonly type = ActionTypes.loadMovies;
}

export class LoadMoviesSuccess implements Action {
    readonly type = ActionTypes.loadMoviesSuccess;
    constructor(public readonly payload: Array<IMovies>) {}
}

export class LoadMoviesFail implements Action {
    readonly type = ActionTypes.loadMoviesFail;
}

export class ReadMovieDetails implements Action {
    readonly type = ActionTypes.readMovieDetails;
    constructor(public readonly payload: string) {}
}

export class ReadMovieDetailsSuccess implements Action {
    readonly type = ActionTypes.readMovieDetailsSuccess;
    constructor(public readonly payload: IMovies) {}
}