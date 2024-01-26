import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'inscripcion-register-tutor-page',
  templateUrl: './register-tutor-page.component.html',
  styleUrls: ['./register-tutor-page.component.css']
})
export class RegisterTutorPageComponent {
  constructor(private router:Router){}
  navigateToRegisterStudent(){
    this.router.navigate(['/register-student'])
  }
}

