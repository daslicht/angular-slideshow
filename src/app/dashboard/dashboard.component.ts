import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  //moduleId: module.id, see: https://angular.io/docs/ts/latest/cookbook/component-relative-paths.html#!#webpack
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  
  constructor(
      private router: Router,
      private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
