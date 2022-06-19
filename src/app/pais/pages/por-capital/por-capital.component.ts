import { Component, Input, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {


  constructor(public servicio:PaisService) { }

  ngOnInit(): void {
  }
  paises : Paises[] = [];
  termino : string = "HolaMundo";
  hayError : boolean = false;

  buscar(evento : string){
    this.termino = evento;
    console.log(this.termino);
    this.hayError = false;
    this.servicio.buscarCapital(this.termino)
    .subscribe((respuesta) => {
      this.paises = [...respuesta];
      console.log(respuesta);
    }, (error) => {
      this.hayError = true;
      this.paises = [];
    })
  }

}
