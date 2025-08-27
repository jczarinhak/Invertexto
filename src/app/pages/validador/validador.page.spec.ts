import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidadorPage } from './validador.page';

describe('ValidadorPage', () => {
  let component: ValidadorPage;
  let fixture: ComponentFixture<ValidadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
