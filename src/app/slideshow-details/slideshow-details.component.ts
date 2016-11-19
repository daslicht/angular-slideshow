import { Slideshow } from '../slideshow';
import { Component, OnInit } from '@angular/core';
import { SlideshowService } from '../slideshow.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Slide } from '../slide';

@Component({
  selector: 'app-slideshow-details',
  templateUrl: './slideshow-details.component.html',
  styleUrls: ['./slideshow-details.component.css']
})
export class SlideshowDetailsComponent implements OnInit {

  slideshow:Slideshow
  slides:Slide[]
  sub:any
  id:number
  constructor(  
    private slideshowService: SlideshowService,
    private route: ActivatedRoute,
    private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  // ngOnInit() {
  //   console.log(this.route.params)
  //     //this.slideshow = this.slideshowService.getSlideshow(this.route.params)
  //   //   .switchMap((params: Params) => this.heroService.getHero(+params['id']))
  //   //   .subscribe(hero => this.hero = hero);
  //   // }
  // }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
        console.log(' id? : ', this.id)
       if(this.id){
        this.slideshow = this.slideshowService.getSlideshow(this.id)
        console.log(' this.slideshow: ', this.slideshow)
        // if( this.slideshow.slides) {
        //   this.slides = this.slideshow.slides
        // }
       }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}