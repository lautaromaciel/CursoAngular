import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl : string = "https://restcountries.com/v2";

  // parametros  = "?fields=name,flag,population,capital,alpha2Code"
  param = new HttpParams().set("fields","name,flags,population,capital,alpha2Code")

  constructor(private htpp: HttpClient ) { }

  buscarPais(termino : string):Observable<Paises[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.htpp.get<Paises[]>(url, {params : this.param});
  }
  buscarCapital(termino : string):Observable<Paises[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.htpp.get<Paises[]>(url, {params : this.param});
  }
  getPaisPorCodigo(termino : string):Observable<Paises>{
    const url = `${this.apiUrl}/alpha/${termino}`
    return this.htpp.get<Paises>(url);
  }
  buscarPorRegion(termino : string):Observable<Paises[]>{
    const url = `${this.apiUrl}/regionalbloc/${termino}`
    return this.htpp.get<Paises[]>(url, {params : this.param});
  }




}
