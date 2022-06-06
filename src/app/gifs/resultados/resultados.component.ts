import { Component, OnInit } from '@angular/core';
import { Datum } from '../interfaces/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {


  constructor(public gifsservice : GifsService) { }

  get resultados(){
    return this.gifsservice.resultado;
  };



  ngOnInit(): void {
  }

}
