import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStudenPageComponent } from './register-studen-page.component';

describe('RegisterStudenPageComponent', () => {
  let component: RegisterStudenPageComponent;
  let fixture: ComponentFixture<RegisterStudenPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterStudenPageComponent]
    });
    fixture = TestBed.createComponent(RegisterStudenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
