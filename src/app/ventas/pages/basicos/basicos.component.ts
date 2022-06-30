import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{

  nombreLower: string = "lautaro";
  nombreUpper : string = "LAUTARO";
  nombreCompleto : string = "lAuTaRo";

  fecha : Date = new Date();

}
