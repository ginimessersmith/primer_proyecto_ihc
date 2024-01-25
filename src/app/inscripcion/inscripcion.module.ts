import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { FormularioPageComponent } from './pages/formulario-page/formulario-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


@NgModule({
  declarations: [
    FormularioPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    InscripcionRoutingModule
  ]
})
export class InscripcionModule { }
