import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTutorPageComponent } from './register-tutor-page.component';

describe('RegisterTutorPageComponent', () => {
  let component: RegisterTutorPageComponent;
  let fixture: ComponentFixture<RegisterTutorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterTutorPageComponent]
    });
    fixture = TestBed.createComponent(RegisterTutorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
