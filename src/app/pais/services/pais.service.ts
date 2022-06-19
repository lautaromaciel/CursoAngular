import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl : string = "https://restcountries.com/v2";

  constructor(private htpp: HttpClient ) { }

  buscarPais(termino : string):Observable<Paises[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.htpp.get<Paises[]>(url);
  }
  buscarCapital(termino : string):Observable<Paises[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.htpp.get<Paises[]>(url);
  }
  getPaisPorCodigo(termino : string):Observable<Paises>{
    const url = `${this.apiUrl}/alpha/${termino}`
    return this.htpp.get<Paises>(url);
  }




}
