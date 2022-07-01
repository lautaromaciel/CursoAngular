import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  mayus = false;
  cambiarMayus(){
    if(this.mayus == true) this.mayus = false
    else this.mayus = true;
  }

  heroes : Heroe[] = [
    {nombre:"superman",vuela:true,color:1},
    {nombre:"flash",vuela:false,color:2},
    {nombre:"spiderman",vuela:false,color:3},
    {nombre:"batman",vuela:false,color:4},
    {nombre:"linterna verde",vuela:true,color:5},
  ]

  ordenarPor : string = "";

  cambiarOrden(valor : string){
    if(valor === "nombre") this.ordenarPor = "nombre";
    if(valor === "color") this.ordenarPor = "color";
    if(valor === "volar") this.ordenarPor = "volar";
  }



  constructor() { }

  ngOnInit(): void {
  }

}
