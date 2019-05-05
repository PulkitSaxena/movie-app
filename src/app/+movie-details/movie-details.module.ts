import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CarouselModule } from 'primeng/carousel';

import { MovieDetailComponent } from '../+movie-details/components/movie-detail/movie-detail.component'
import { MovieDetailPageComponent } from '../+movie-details/containers/movie-detail-page/movie-detail-page.component'
import { CommonComponentsModule } from '../+common-components/common-components.module'

// child level routes
const routes: Routes = [
  { path: '', component: MovieDetailPageComponent }
]

export const routing = RouterModule.forChild(routes)

@NgModule({
  declarations: [
    MovieDetailPageComponent, 
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    routing,
    CarouselModule,
    CommonComponentsModule
  ]
})
export class MovieDetailsModule { }
