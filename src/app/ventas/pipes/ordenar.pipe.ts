import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes:Heroe[], ordenarPor : string = ""): Heroe[] {

    if(ordenarPor === "") return heroes;
    if(ordenarPor === "nombre"){
      heroes =  heroes.sort((a,b)=> (a.nombre > b.nombre)? 1 : -1 );
      return heroes;
    }
    if(ordenarPor === "color"){
      heroes =  heroes.sort((a,b)=> (a.color > b.color)? 1 : -1 );
      return heroes;
    }
    if(ordenarPor === "volar"){
      heroes =  heroes.sort((a,b)=> (a.vuela > b.vuela)? 1 : -1 );
      return heroes;
    }
  }

}
