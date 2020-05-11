import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};


  // tslint:disable-next-line: variable-name
  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {

     this.activatedRoute.params.subscribe( params => {
         // tslint:disable-next-line: no-string-literal
         this.heroe = this._heroesService.getHeroe( params['id'] );
         console.log(this.heroe);

   });
  }

}
