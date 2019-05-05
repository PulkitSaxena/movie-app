import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsModule } from 'primeng/chips';
import { RatingModule } from  'primeng/rating'
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from  './components/header/header.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ChipsModule,
    RatingModule,
    ButtonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ChipsModule,
    RatingModule,
    FormsModule,
  ]
})
export class CommonComponentsModule { }
