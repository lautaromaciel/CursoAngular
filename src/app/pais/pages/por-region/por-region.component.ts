import { Component, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones : string[] = ["EU","EFTA","CARICOM",
  "PA","AU","USAN","EEU","AL","ASEAN","CAIS",
  "CEFTA","NAFTA","SAARC" ];
  regionActiva : string = "";

  paises : Paises[] = [];


  activarRegion(region:string){
    this.regionActiva = region;
    /* acelerar el proceso */
    this.paises = [];
    /* */
    this.service.buscarPorRegion(region)
    .subscribe(respuesta => this.paises = respuesta);
  }
  regionClass(region :string){
    return (region === this.regionActiva)? "btn btn-primary" : "btn btn-outline-primary"
  }

  constructor(public service:PaisService) { }

  ngOnInit(): void {
  }

}
