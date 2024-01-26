import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioPageComponent } from './pages/formulario-page/formulario-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { InscripcionRoutingModule } from './inscripcion-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CardStudentsComponent } from './pages/card-students/card-students.component';


@NgModule({
  declarations: [
    FormularioPageComponent,
    LayoutPageComponent,
    CardStudentsComponent
  ],
  imports: [
    CommonModule,
    InscripcionRoutingModule,
    SharedModule,

  ]
})
export class InscripcionModule { }
