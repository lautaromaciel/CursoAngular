import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items : MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [{
        label : "Pipes de Angular",
        items: [
          { label : "Basicos",
            routerLink : "home",
          },
          {label : "Numeros",
            routerLink : "numeros"
          },
          {label : "No comunes",
            routerLink : "noComunes"
          }
        ]
      },
      {
        label : "Pipes Personalizados",
        routerLink : "ordenar"
      }
    ];


  }



}
