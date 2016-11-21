import { Slide } from '../slide';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { SlideshowService } from '../slideshow.service';

@Component({
  selector: 'app-slide-detail',
  templateUrl: './slide-detail.component.html',
  styleUrls: ['./slide-detail.component.css']
})
export class SlideDetailComponent implements OnInit {
  
  private sub
  private $key:string
  private slide:Slide

  constructor(  
    private slideshowService: SlideshowService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
        this.$key =  params['id']; // (+) converts string 'id' to a number
        console.log(' params: ', params)
        if(this.$key != ''){
        console.log(' $key : ', this.$key)
        this.slide = this.slideshowService.getSlide(this.$key)
          //console.log('this.slideshowService.getSlideshow(this.$key) ', this.slideshowService.getSlideshow(this.$key))
         // this.slides = this.slideshow.slides
        // if( this.slideshow.slides) {
        //   this.slides = this.slideshow.slides
        // }
       }
    });
  }

}
