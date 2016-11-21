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
  $key:string

  constructor(  
    private slideshowService: SlideshowService,
    private route: ActivatedRoute,
    private location: Location) { }
    oneSlide:boolean
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
        this.$key =  params['id']; // (+) converts string 'id' to a number
        if(this.$key != ''){
            console.log(' $key : ', this.$key)
            this.slideshow = this.slideshowService.getSlideshow(this.$key)
            this.slides = this.slideshow.slides
            console.log(' this.slides',  this.slides)
          //console.log('this.slideshowService.getSlideshow(this.$key) ', this.slideshowService.getSlideshow(this.$key))
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