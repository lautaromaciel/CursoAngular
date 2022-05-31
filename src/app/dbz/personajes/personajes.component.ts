import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  get personajes() :Personaje[]{
    return this.dbzS.personajes;
  }




  constructor(private dbzS : dbzService){}
}
