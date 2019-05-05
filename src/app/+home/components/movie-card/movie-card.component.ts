import { Component, OnInit, Input, HostListener } from '@angular/core';
import { IMovies } from '../../../models/movies.model';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

/**
 * Implement animations for moviecard
 */

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  animations: [
    trigger('hover', [
      state('active', style({
        opacity: 0.2, transform: 'scale(1.05)', zIndex: -2
      })),
      state('inactive', style({
        opacity: 1, transform: 'scale(1)'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-in'))
    ])
  ]
})

/**
 *  Defination of MovieCardComponent
 */

export class MovieCardComponent implements OnInit {
  @Input() movie: IMovies
  hoveringState = 'inactive'

  constructor() { }

  ngOnInit() { }

  /**
   * On Mouse Enter event change hoveringState variable to "active" for animation
   */

  @HostListener('mouseenter')
  onMouseOver() {
    this.hoveringState = 'active';
  }

  /** 
   * On Mouse Leave event change hoveringState variable to "inactive" for animation
   */

  @HostListener('mouseleave')
  onMouseOut() {
    this.hoveringState = 'inactive';
  }
}
