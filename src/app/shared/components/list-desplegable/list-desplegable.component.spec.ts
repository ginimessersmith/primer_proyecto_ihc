import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesplegableComponent } from './list-desplegable.component';

describe('ListDesplegableComponent', () => {
  let component: ListDesplegableComponent;
  let fixture: ComponentFixture<ListDesplegableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDesplegableComponent]
    });
    fixture = TestBed.createComponent(ListDesplegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
