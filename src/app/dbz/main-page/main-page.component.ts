import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  personajesEnMain : Personaje[] = [
    {
      nombre : "goku",
      poder : 15000
    },
    {
      nombre : "vegeta",
      poder : 8500
    }
  ]

  nuevo : Personaje = {
    nombre : "Trunks",
    poder : 14.000
  }

}
