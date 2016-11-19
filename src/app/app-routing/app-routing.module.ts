import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from '../dashboard/dashboard.component';
import { HeroesComponent }      from '../hero/heroes.component';
import { HeroDetailComponent }  from '../hero-detail/hero-detail.component';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { SlideshowDetailsComponent } from '../slideshow-details/slideshow-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'slideshows', component: SlideshowComponent,
      children:[
         { path: '', redirectTo: '11', pathMatch: 'full' }, //fix this
         { path: ':id',     component: SlideshowDetailsComponent }
      ]
  },
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [ 
    RouterModule 
  ]
})

export class AppRoutingModule {}
