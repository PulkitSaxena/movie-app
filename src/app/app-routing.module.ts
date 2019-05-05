import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Root level routes with Lazy loading of child modules
const routes: Routes = [
  { path: '', loadChildren: './+home/home.module#HomeModule' },
  { path: 'movie/:movieId', loadChildren: './+movie-details/movie-details.module#MovieDetailsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
