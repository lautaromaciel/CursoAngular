import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() personajesEnAgregar : Personaje[] = [];
  @Input() nuevo : Personaje = {
    nombre : "",
    poder : 0
  };

  agregar(){
    console.log(this.nuevo);
    this.personajesEnAgregar.push(this.nuevo);
    this.nuevo = {
      nombre : "",
      poder : 0
    }
    console.log(this.personajesEnAgregar);
  }
  

}
