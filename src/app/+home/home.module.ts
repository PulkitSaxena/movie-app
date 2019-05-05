import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component'
import { MovieCardListComponent } from "./components/movie-card-list/movie-card-list.component";
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './containers/home-page/home-page.component'
import { CommonComponentsModule } from '../+common-components/common-components.module'
import { MessagesModule } from 'primeng/messages';

// Implement module/child level routes
const routes: Routes = [
  { path: '', component: HomePageComponent }
]

export const routing = RouterModule.forChild(routes)

// Declarations and imports for module

@NgModule({
  declarations: [
    MovieCardComponent,
    MovieCardListComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    routing,
    CommonComponentsModule,
    MessagesModule
  ]
})
export class HomeModule { }
