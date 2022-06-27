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
  termino : string = "";
  hayError : boolean = false;

  sugerencias : Paises[] = [];
  haySugerencias = false;

  buscar(evento : string){
    this.haySugerencias = false;
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

  mostrarSugerencias(termino:string){
    this.termino = termino;
    this.haySugerencias = true;
    this.hayError = false;
     this.servicio.buscarPais(termino)
     .subscribe(
        (respuesta) => this.sugerencias = respuesta.splice(0,5),
        (error) => {
          this.sugerencias = [];
          console.clear();
        }
     )

  }




}
