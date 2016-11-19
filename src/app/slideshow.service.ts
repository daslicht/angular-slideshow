import { Injectable } from '@angular/core';
import { Slideshow } from './slideshow';
import { Headers, Http } from '@angular/http';

import { SLIDESHOWS } from './mock-slideshows.1';
@Injectable()
export class SlideshowService {

  private slideshowsUrl = 'app/slideshows';  // URL to web api

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

  //   getSlideshows(): Promise<Slideshow[]> {
  //     // http://exploringjs.com/es6/ch_promises.html
  //     return this.http.get(this.slideshowsUrl)
  //               .toPromise()
  //               .then(response => response.json().data as Slideshow[])
  //               .catch(this.handleError);
  // }
    getSlideshows(){

      return SLIDESHOWS;
      //return null;
    }

    getSlideshow(id:number):Slideshow {
      let slideshows = this.getSlideshows()
      //return slideshows.find( slideshow => slideshow.id === id );
      return null //todo
    }

}
