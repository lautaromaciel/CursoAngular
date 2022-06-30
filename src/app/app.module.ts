import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';

/* Cambiar el local de la app */
import localeEspañol from "@angular/common/locales/es-AR";
import localeFrances from "@angular/common/locales/fr";
import { registerLocaleData} from "@angular/common";
registerLocaleData(localeEspañol);
registerLocaleData(localeFrances);





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    VentasModule,
    AppRouterModule
  ],
  providers: [
    /* Poner españo Argentina como global */
    {provide: LOCALE_ID , useValue : "es-AR"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
