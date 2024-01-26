import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionModule } from './inscripcion/inscripcion.module';
import { LayoutPageComponent } from './inscripcion/pages/layout-page/layout-page.component';
import { HomePagesComponent } from './inscripcion/pages/home-pages/home-pages.component';
import { RegisterTutorPageComponent } from './inscripcion/pages/register-tutor-page/register-tutor-page.component';
import { RegisterStudenPageComponent } from './inscripcion/pages/register-studen-page/register-studen-page.component';
import { FormularioPageComponent } from './inscripcion/pages/formulario-page/formulario-page.component';
import { CardStudentsComponent } from './inscripcion/pages/card-students/card-students.component';

const routes: Routes = [
  {path:'',redirectTo:'layout',pathMatch:'full'},
  {path:'layout',component:LayoutPageComponent},
  {path:'home',component:HomePagesComponent},
  {path:'register-parents',component:RegisterTutorPageComponent},
  {path:'register-student',component:RegisterStudenPageComponent,},
  {path:'form',component:FormularioPageComponent},
  { path: 'card-students', component: CardStudentsComponent },
  {path:'**',redirectTo:'/layout',pathMatch:'full'},
];
// const routes: Routes = [
//   {
//     path: 'inscripcion',
//     loadChildren: () => import('./inscripcion/inscripcion.module')
//       .then(module => module.InscripcionModule)
//   }
// ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
