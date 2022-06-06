import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild("txtBuscar") txtBuscar:ElementRef<HTMLInputElement>;

  constructor(private gifservice : GifsService){};


  buscar(){
    const input = this.txtBuscar.nativeElement;
    if(input.value.trim().length === 0) return;
    if(this.gifservice.historial.includes(input.value)) return;
    this.gifservice.buscarGifs(input.value);
    input.value = "";
  }

  

}
