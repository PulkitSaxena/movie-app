import { Component, OnInit, Input } from '@angular/core';
import { IMovies } from '../../../models/movies.model';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'underscore'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})

/**
 * Class definition for MovieDetailComponent
 */

export class MovieDetailComponent implements OnInit {
  @Input() movie: IMovies
  @Input() movies: Array<IMovies>

  // Create private sanitizer variable to create dynamic src values in html
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
     this.movies = _.shuffle(this.movies);
  }

}
