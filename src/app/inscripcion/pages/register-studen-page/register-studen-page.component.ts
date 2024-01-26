import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'inscripcion-register-studen-page',
  templateUrl: './register-studen-page.component.html',
  styleUrls: ['./register-studen-page.component.css']
})
export class RegisterStudenPageComponent {
  // @Input()
  // nombrePadre:string=''
  // @Input()
  // ciPadre:number=0
  // @Input()
  // numTelPadre:number=0

  // @Input()
  // nombreMadre:string=''
  // @Input()
  // ciMadre:number=0
  // @Input()
  // numTelMadre:number=0

  // @Input()
  // nombreTutor:string=''
  // @Input()
  // ciTutor:number=0
  // @Input()
  // numTelTutor:number=0
  constructor(private router:Router){}

  navigateToForm(){
    this.router.navigate(['/form'])
  }

}
