import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {}; // El input le  va a decir a Angular que una propiedad va a ser recibida desde afuera
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;  // Nombre del evento que quiero que el padre este escuchando

  constructor( private router: Router ) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe() {
 //  this.router.navigate( ['/heroe', this.index] );
   this.heroeSeleccionado.emit( this.index ); // Al llamar a la funcion, emito el index del heroe seleccionado hacia afuera (al padre)
  }

}
