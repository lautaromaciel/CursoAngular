import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes : string[] = ["spiderman","superman","batman","hulk"];
  heroeBorrado : string = "";

  remover(){
    this.heroeBorrado = this.heroes.pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
