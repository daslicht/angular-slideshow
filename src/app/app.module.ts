import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';

import { InMemoryDataService }  from './in-memory-data.service';

import { HeroService }  from './hero.service';
import { SlideshowService } from './_data/slideshow.service';

import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppComponent } from './app/app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { AppRoutingModule }     from './app-routing/app-routing.module';
import { HeroSearchComponent } from './hero-search/hero-search.component';

import './rxjs-extensions';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SlideshowDetailsComponent } from './slideshow-details/slideshow-details.component';
import { SlideDetailComponent } from './slide-detail/slide-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    AppRoutingComponent,
    HeroSearchComponent,
    SlideshowComponent,
    SlideshowDetailsComponent,
    SlideDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    // InMemoryWebApiModuleII.forRoot(SlideshowInMemoryDataService),
    AppRoutingModule
  ],
  providers: [HeroService,SlideshowService],
  //providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {



}
