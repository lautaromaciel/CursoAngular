import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()
export class dbzService{
    
  private _personajes : Personaje[] = [
      {
        nombre : "goku",
        poder : 15000
      },
      {
        nombre : "vegeta",
        poder : 8500
      }
    ];

  get personajes() : Personaje[]{
    return [...this._personajes];
  };

  agregarPersonaje(personaje : Personaje){
    this._personajes.push(personaje);
  }

  constructor(){
      console.log("servicio inicializado")
  }

}