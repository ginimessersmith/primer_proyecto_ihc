import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionModule } from './inscripcion/inscripcion.module';

const routes: Routes = [
  {
    path: 'inscripcion  ',
    loadChildren: () => import('./inscripcion/inscripcion.module')
      .then(modulo => modulo.InscripcionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
