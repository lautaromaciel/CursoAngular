import { Component, Input} from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {



  constructor(private gifservice : GifsService){}

  get elementos(){
    return this.gifservice.historial
  }
  buscar(evento:any){
    let palabra = evento.target.innerHTML;
    this.gifservice.buscarGifs(palabra);
  }





  // mostrarElementos(){
  //   this.elementos = this.gifservice.historial;
  // }





}
