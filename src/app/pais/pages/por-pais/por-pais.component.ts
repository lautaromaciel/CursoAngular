import { Component, Input, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  constructor(public servicio : PaisService){}


  paises : Paises[] = [];
  termino : string = "HolaMundo";
  hayError : boolean = false;

  buscar(evento : string){
    this.termino = evento;
    console.log(this.termino);
    this.hayError = false;
    this.servicio.buscarPais(this.termino)
    .subscribe((respuesta) => {
      this.paises = [...respuesta];
      console.log(respuesta);
    }, (error) => {
      this.hayError = true;
      this.paises = [];
    })
  }




}
