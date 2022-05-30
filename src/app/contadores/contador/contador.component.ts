import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  title: string = "Contador";
  numero: number = 0;
  base: number = 5;

  acumular(valor : number){
    this.numero+=valor;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
