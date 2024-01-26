import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { RegisterTutorPageComponent } from './pages/register-tutor-page/register-tutor-page.component';
import { RegisterStudenPageComponent } from './pages/register-studen-page/register-studen-page.component';
import { FormularioPageComponent } from './pages/formulario-page/formulario-page.component';
import { CardStudentsComponent } from './pages/card-students/card-students.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'register-parents', component: RegisterTutorPageComponent },
      { path: 'register-student', component: RegisterStudenPageComponent },
      { path: 'form', component: FormularioPageComponent },
      { path: 'card-students', component: CardStudentsComponent },
      { path: '**', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionRoutingModule { }
