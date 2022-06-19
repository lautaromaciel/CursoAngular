import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paises } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';
import {switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais : Paises;


  constructor(private activatedRoute : ActivatedRoute,
    private service : PaisService) { }

  ngOnInit(): void {

    // this.activatedRoute.params
    // .subscribe(params => {
    //   this.service.getPaisPorCodigo(params.id)
    //   .subscribe(respuesta => this.pais = respuesta)
    // })
    this.activatedRoute.params
    .pipe(
      switchMap(params => this.service.getPaisPorCodigo(params.id))
    )
    .subscribe(respuesta => this.pais = respuesta);


  }

}
