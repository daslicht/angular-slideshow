import { Injectable } from '@angular/core';
import { Slideshow } from './slideshow';
import { Headers, Http } from '@angular/http';

import { SLIDESHOWS } from './mock-slideshows.1';
import { Slide } from './slide';
@Injectable()
export class SlideshowService {

  private slideshowsUrl = 'app/slideshows';  // URL to web api
  private slideshows
  private slides 

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor( private http: Http ) { }

  //   getSlideshows(): Promise<Slideshow[]> {
  //     // http://exploringjs.com/es6/ch_promises.html
  //     return this.http.get(this.slideshowsUrl)
  //               .toPromise()
  //               .then(response => response.json().data as Slideshow[])
  //               .catch(this.handleError);
  // }
    getSlideshows() {
      let obj = SLIDESHOWS
      console.log(obj)
      this.slideshows = Array()
      Object.keys(obj).map( (key) => {
        let tmpSlideshowObj = obj[key]
        let slideshow = new Slideshow();
            slideshow.name = tmpSlideshowObj.name
            slideshow.$key = key
            slideshow.slides = new Array() // why does .slides not work ?!
        let tmpSlides = tmpSlideshowObj.slides
        Object.keys(tmpSlides).map( (key) => {
         //console.log('tmpSlides[key]', tmpSlides[key])
          slideshow["slides"].push( tmpSlides[key] as Slide  )
        })
        this.slideshows.push(slideshow)
      });   
      return this.slideshows;
    }
    
    getSlide($key:string):Slide{
     // return this.slide
     return new Slide()
    }

    getSlideshow($key:string):Slideshow {
      let slideshows = this.getSlideshows()
      console.log('slideshows',slideshows)
      // for (let i in this.slideshows){
      //   if (slideshows[i].$key === $key){
      //      return slideshows[i]
      //   }
      // }
      return slideshows.find( slideshow => slideshow.$key === $key ) as Slideshow;
    }

}
