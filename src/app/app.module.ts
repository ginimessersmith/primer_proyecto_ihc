import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './inscripcion/pages/home-pages/home-pages.component';
import { RegisterStudenPageComponent } from './inscripcion/pages/register-studen-page/register-studen-page.component';
import { RegisterTutorPageComponent } from './inscripcion/pages/register-tutor-page/register-tutor-page.component';
import { ListDesplegableComponent } from './shared/components/list-desplegable/list-desplegable.component';
import { InscripcionModule } from './inscripcion/inscripcion.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePagesComponent,
    RegisterStudenPageComponent,
    RegisterTutorPageComponent,
    ListDesplegableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InscripcionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
