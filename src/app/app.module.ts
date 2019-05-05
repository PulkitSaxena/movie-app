import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from  '@ngrx/effects'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { FooterComponent } from './components/footer/footer.component'
import { ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { reducers } from './reducers/index';
import { MovieService } from './services/movies.service'
import { RelayService } from './services/relay.service'
import { MovieEffects } from './effects/movies.effects';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([MovieEffects])
  ],  
  providers: [MovieService, RelayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
