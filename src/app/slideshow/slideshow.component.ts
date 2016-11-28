import { Slide } from '../_data/slide';
import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { SlideshowService } from '../_data/slideshow.service';
import { Slideshow } from '../_data/slideshow';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  slideshows:Slideshow[] = Array()
  selectedSlideshow:Slideshow

  constructor(private router: Router, private slideshowService: SlideshowService) { 

  }
  ngOnInit() {
    this.getSlideshows()
  }

  onSelect(slideshow: Slideshow): void {
    this.selectedSlideshow = slideshow
  }
  
  delete(slideshow:Slideshow) {
    console.log('delete slideshow', slideshow)
  }

  getSlideshows(): void {

    //console.log(this.slideshowService.getSlideshows())
    this.slideshows =  this.slideshowService.getSlideshows()
    


    // Object.keys(obj).map( (key) => {
    //   let tmpSlideshowObj = obj[key]
    //   //   slideshow.name = "foo"
    //   let slideshow = new Slideshow();
    //       slideshow.name = tmpSlideshowObj.name
    //       slideshow.$key = key
    //       slideshow.slides = new Array() // why does .slides not work ?!
    //   console.log('slideshow: ', slideshow);
      
    //   let tmpSlides = tmpSlideshowObj.slides

    //   Object.keys(tmpSlides).map( (key) => {
    //     //console.log('tmpSlides[key] ',tmpSlides[key] )
    //     slideshow["slides"].push( tmpSlides[key] as Slide  )
    //   })
    //   this.slideshows.push(slideshow)
    // });

   // console.log('this.slideshows',this.slideshows)
    // var newObject = Object.keys(obj).reduce(function(previous, current) {
    //   previous[current] = obj[current] * myObject[current];
    //   return previous;
    // }, {});

    //this.slideshows = this.slideshowService.getSlideshows()
   
    //this.slideshowService.getSlideshows().then(heroes => this.slideshows = heroes);
  }
}
