import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';







@NgModule({
  exports : [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    BrowserAnimationsModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
