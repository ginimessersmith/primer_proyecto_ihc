import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './inscripcion/pages/home-pages/home-pages.component';
import { RegisterStudenPageComponent } from './inscripcion/pages/register-studen-page/register-studen-page.component';
import { RegisterTutorPageComponent } from './inscripcion/pages/register-tutor-page/register-tutor-page.component';
import { ListDesplegableComponent } from './shared/components/list-desplegable/list-desplegable.component';
import { InscripcionModule } from './inscripcion/inscripcion.module';
import { SharedModule } from './shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
    InscripcionModule,
    SharedModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
