import { Component, OnInit } from '@angular/core';

import { RouteParams } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero-detail.template.html'
})
export class HeroDetailComponent implements OnInit {
	hero: Hero;

	constructor(private _heroService: HeroService, private _routeParams: RouteParams) {}

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._heroService.getHero(id)
										.then(hero => this.hero = hero);
	}

	goBack() {
		window.history.back();
	}
}