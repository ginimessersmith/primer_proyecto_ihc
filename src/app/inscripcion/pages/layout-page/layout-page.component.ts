import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'inscripcion-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  constructor(private router: Router) { }

  navegarARegistroTutores() {
    this.router.navigate(['/register-parents']);
  }
}
