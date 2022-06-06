import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datum, GIF } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey : string = "QjY8mfXIy3A3zHoShS8FbFm4N4DG85fm"
  private _historial : string[] = [];

  public resultado : Datum[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(public http : HttpClient){
    if(localStorage.getItem("historial")){
      this._historial = JSON.parse(localStorage.getItem("historial"));
    }
    if(localStorage.getItem("imagenes")){
      this.resultado = JSON.parse(localStorage.getItem("imagenes"));
    }
  }


  buscarGifs(query : string){
    query = query.trim().toLowerCase();
    if (!this.historial.includes(query)){
      this._historial.unshift(query);
    }
    if(this._historial.length > 10){
      this._historial.pop();
    }
    localStorage.setItem("historial",JSON.stringify(this.historial));
    this.http.get<GIF>(`https://api.giphy.com/v1/gifs/search?api_key=QjY8mfXIy3A3zHoShS8FbFm4N4DG85fm&q=${query}&limit=10`).subscribe((resp) =>{
      this.resultado = resp.data;
      localStorage.setItem("imagenes",JSON.stringify(this.resultado));
    });

    // fetch("https://api.giphy.com/v1/gifs/search?api_key=QjY8mfXIy3A3zHoShS8FbFm4N4DG85fm&q=dragonballz&limit=10").then(resp => resp.json()).then(data => console.log(data));
  }


}

