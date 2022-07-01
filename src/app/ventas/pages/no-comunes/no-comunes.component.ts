import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';




@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {


  /* i18n select */
  nombre:string = "Lautaro";
  genero : string = "masculino";

  cambiarNombre(){
    if(this.nombre == "Lautaro"){
      this.nombre = "Estefania";
      this.genero = "femenino"
    }else{
      this.nombre = "Lautaro";
      this.genero = "masculino"
    }
  }

  invitacionMapa = {
    "masculino" : "invitarLO",
    "femenino" : "invitarLA"
  }


  /* i18n select plural */
  clientes : string[] = ["Maria", "Pedro", "Andres"];
  clientesMapa = {
    "=0" : "no tenemos ningun cliente esperando",
    "=1" : "tenemos un cliente esperando",
    "other" : "tenemos # clientes esperando"
  }
  cambiarClientes(){
    this.clientes.pop();
  }
  rellenarClientes(){
    this.clientes = ["Maria","Pedro","Andres"];
  }

  /* KeyValuePipe */
  persona = {
    "nombre" : "Lautaro",
    "apellido" : "Maciel",
    "edad" : "23",
  }

  /* Async Pipe */
  miObservable = interval(500);

  miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Tenemos Data de la Promesa")
    },10000)
  })


  constructor() { }

  ngOnInit(): void {
  }

}
