import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Button, ButtonModule} from 'primeng/button';
import {Card, CardModule} from 'primeng/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  exports : []
})
export class PrimeNgModule { }
