import { Injectable } from '@angular/core'

import { IMovies } from '../models'
import { RelayService } from './relay.service'
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
    constructor(private relayService: RelayService) {}

    /**
     * Calls relayService fetch function to read movies
     */

    fetchMovies(): Observable<IMovies[]> {
        return this.relayService.fetchMovies();
    }
}
