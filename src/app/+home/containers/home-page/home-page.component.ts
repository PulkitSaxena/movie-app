import { Component, OnInit } from '@angular/core';
import { LoadMoviesIfNeeded } from '../../../actions'
import { Store } from '@ngrx/store';
import { IAppState, selectMovieList } from '../../../reducers'
import { Observable } from 'rxjs';
import { IMovies } from '../../../models/movies.model';
 
@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

/**
 * Class definition of HomePageComponent
 */

export class HomePageComponent implements OnInit {
  movies$: Observable<IMovies[]>
  showSearchBar = false
  searchFilters: Array<string> = [];

  /**
   * Create private store variable in constructor
   * @param store 
   */

  constructor(private store: Store<IAppState>) { }

  /**
   *  Dispatch load movie action on init 
   */

  ngOnInit() {
    this.store.dispatch(new LoadMoviesIfNeeded());
    this.movies$ = this.store.select(selectMovieList)
  }

  /**
   * Modify searchFilters coming from downstream event
   * @param event 
   */

  trySearch(event) {
    this.searchFilters = event;
  }

}
