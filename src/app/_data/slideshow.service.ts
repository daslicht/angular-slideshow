
import { Observable,Subject,BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Slideshow } from './slideshow';
import { Headers, Http } from '@angular/http';
import { SLIDESHOWS } from './mock-slideshows.1';
import { Slide } from './slide';

@Injectable()
export class SlideshowService {

  private slideshowsUrl = 'app/slideshows'  // URL to web api
  private slideshows
  private slides 
  private test:Observable<{}>
  private subject:Subject<{}>
  private behaviorSubject:BehaviorSubject<{}>
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor( private http: Http ) { 
    let foo


     this.test = Observable.create(function subscribe(observer) {
       foo = observer
        
        // var intervalID = setInterval(() => {
        //   observer.next('hi');
        // }, 1000);
      })
      this.subject = new Subject()
      let multicasted = this.test.multicast(this.subject).refCount(); // refCount, automatically call connect on subscription

      // These are, under the hood, `subject.subscribe({...})`:
      multicasted.subscribe({
        next: (v) => console.log('observerA: ' , v)
      });
      multicasted.subscribe({
        next: (v) => console.log('observerB: ', v)
      });

        // This is, under the hood, `source.subscribe(subject)`:
       // multicasted.connect();

      // let subscription = this.test.subscribe(
      //    (x) =>{
      //     console.log('Next: %s', x);
      //      //foo.next("NEXT2 CALLED")
      //   },
      //    (err)=> {
      //     console.log('Error: %s', err);
      //   },
      //    () =>{
      //     console.log('Completed');
      //   });

         this.subject.next({
           foo:"bar"
         })

        this.behaviorSubject = new BehaviorSubject(0);

        this.behaviorSubject.subscribe({
            next: (v) => console.log('observerA: ' + v)
        });



  }

  //   getSlideshows(): Promise<Slideshow[]> {
  //     // http://exploringjs.com/es6/ch_promises.html
  //     return this.http.get(this.slideshowsUrl)
  //               .toPromise()
  //               .then(response => response.json().data as Slideshow[])
  //               .catch(this.handleError);
  // }

    /**
     * Convert Object to Slideshow Array
     */
    getSlideshows() {
      let obj = SLIDESHOWS
      this.slideshows = Array()
      Object.keys(obj).map( (key) => {
        let tmpSlideshowObj = obj[key]
        let slideshow = new Slideshow();
            slideshow.name = tmpSlideshowObj.name
            slideshow.$key = key
            slideshow.slides = new Array() // why does .slides not work ?!
        let tmpSlides = tmpSlideshowObj.slides
        Object.keys(tmpSlides).map( (key) => {
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
