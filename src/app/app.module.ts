import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

//Service
import { HttpClientModule } from '@angular/common/http'; 

import { FormularioComponent } from './Pages/formulario/formulario.component';
import { ListadoComponent } from './Pages/listado/listado.component';
import { LoginComponent } from './Pages/login/login.component';
import { AdmiComponent } from './Components/admi/admi.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { HomeComponent } from './Pages/home/home.component';
import { DatePipe } from '@angular/common'
//includ de forms
import { FormsModule } from '@angular/forms';

// importar locales
import localePy from '@angular/common/locales/es-PY';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
import localeEsAr from '@angular/common/locales/es-AR';
// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localePy, 'es');
registerLocaleData(localePt, 'pt');
registerLocaleData(localeEn, 'en')
registerLocaleData(localeEsAr, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoComponent,
    LoginComponent,
    AdmiComponent,
    RegistroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe,{ provide: LOCALE_ID, useValue: 'es-Ar' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
