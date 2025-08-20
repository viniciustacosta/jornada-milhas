import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBusca } from './form-busca';

describe('FormBusca', () => {
  let component: FormBusca;
  let fixture: ComponentFixture<FormBusca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormBusca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBusca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
