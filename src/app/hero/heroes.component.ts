import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
    
    selectedHero: Hero
    heroes:Hero[]

    constructor( private router: Router, private heroService: HeroService) {
      /* Years of experience and bitter tears have taught us to keep complex logic out of the constructor, 
      especially anything that might call a server as a data access method is sure to do. indetead use     ngOnInit() {
    }*/
    }

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }

    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit():void { // Lifecycle Hook.https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
      this.getHeroes();
    }

    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        });
    }
    
    delete(hero: Hero): void {
      this.heroService
          .delete(hero.id)
          .then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) { this.selectedHero = null; }
          });
    }




}

