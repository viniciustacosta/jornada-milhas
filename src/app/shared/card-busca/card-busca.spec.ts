import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBusca } from './card-busca';

describe('CardBusca', () => {
  let component: CardBusca;
  let fixture: ComponentFixture<CardBusca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardBusca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBusca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
