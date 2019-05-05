import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CONSTANTS } from '../../../constants/constants' 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

/**
 * Class definition for HeaderComponent
 */

export class HeaderComponent implements OnInit {
  // Event emitter variables
  @Input() showSearchBar = true
  @Output() searchByFilters = new EventEmitter();
  filters: Array<string> = []
  logoUrl 

  constructor() { }

  ngOnInit() {
    this.logoUrl = `${CONSTANTS.ASSET_URL}/logo.png`
  }

  /**
   * Emit Modified filters array in an searchByFilters event
   */

  onTrySearch() {
    this.searchByFilters.emit(this.filters);
  }

}
