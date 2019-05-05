import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store"
import { IAppState } from "../reducers"
import { IMovies } from '../models'
import { movies } from './movie.mock-data'
import { Observable, of } from 'rxjs'
import { CONSTANTS } from '../constants/constants'

@Injectable()
export class RelayService {
    constructor(private store: Store<IAppState>) {}

    /**
     * Reads movies from JSON mock file and returns a Observable
     */

    fetchMovies(): Observable<IMovies[]> {
        const moviesData : Array<IMovies> = movies
        moviesData.forEach(mv => mv.img =  `${CONSTANTS.ASSET_URL}/${mv.img}`)
        return of(moviesData);
    }
}