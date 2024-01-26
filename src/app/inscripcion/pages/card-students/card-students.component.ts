import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'inscripcion-card-students',
  templateUrl: './card-students.component.html',
  styleUrls: ['./card-students.component.css']
})
export class CardStudentsComponent {
  constructor(private router:Router){  }
  navigateToHome(){
    this.router.navigate(['/'])
  }
}
