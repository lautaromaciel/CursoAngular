import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo : Personaje = {
    nombre : "",
    poder : 0
  }

  agregar(){
    this.dbzS.agregarPersonaje(this.nuevo)

    this.nuevo = {
      nombre : "",
      poder: 0
    }
  }
  
  constructor(private dbzS : dbzService){}



  

}
