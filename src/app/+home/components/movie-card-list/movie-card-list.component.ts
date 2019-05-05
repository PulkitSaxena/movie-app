import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, selectMovieList } from '../../../reducers'
import { IMovies } from '../../../models/movies.model';
import { CONSTANTS } from '../../../constants/constants';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.scss'],
  animations: [
    trigger('created', [
      transition('void => *', [
        style({ opacity: 0.5, transform: 'scale(0.8)' }),   
        animate('500ms ease-in')
     ])
    ])
  ]
})

export class MovieCardListComponent implements OnInit, OnChanges {
  @Input() movies: Array<IMovies>
  filteredMovies: Array<IMovies>
  @Input() searchFilters: Array<string>
  countPerPage = CONSTANTS.COUNT_PER_PAGE
  msgs: Message[] = [];

  constructor(private store: Store<IAppState> ) { }

  /**
   *  OnInit hook set movies array 
   */

  ngOnInit() {
    this.filteredMovies = this.movies;
  }

  /**
   * On any chnage in searchFilter array, filter movies array accordingly and show info message on UI
   * @param changes 
   */

  ngOnChanges(changes: SimpleChanges) {
    if('searchFilters' in changes) {
      let firstLoad = !this.filteredMovies.length;
      this.searchFilters = changes.searchFilters.currentValue.map(fl => fl.toLowerCase());
      if (this.searchFilters.length) {
        this.filteredMovies = this.movies.filter(mv => { 
          let foundGenre = mv.genres.some(gn => this.searchFilters.indexOf(gn.toLowerCase()) > -1)
          let foundName = mv.name.split(' ').some(key => this.searchFilters.indexOf(key.toLowerCase()) > -1)
          return foundName || foundGenre
        }) 
      } else {
        this.filteredMovies = this.movies;
      }

      // prevent info message on UI if nopt required
      if (!firstLoad && this.searchFilters.length > 0)
        this.msgs.push({severity:'info', summary:'Movies Filtered By :', detail: this.searchFilters.join(', ')});
    }
  }

  /**
   * Track function for ngFor 
   * @param index 
   * @param movieObj 
   */

  trackById(index, movieObj: IMovies) {
    return movieObj.id;
  }
}
