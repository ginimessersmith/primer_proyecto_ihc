import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'inscripcion-formulario-page',
  templateUrl: './formulario-page.component.html',
  styleUrls: ['./formulario-page.component.css']
})
export class FormularioPageComponent {

  constructor(private router:Router){

  }

  navigateToCardStudent(){
    this.router.navigate(['/card-students'])
  }
  navigateToRegisterStuden(){
    this.router.navigate(['/register-student'])
  }
}
