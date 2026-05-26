import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proddetail } from './proddetail';

describe('Proddetail', () => {
  let component: Proddetail;
  let fixture: ComponentFixture<Proddetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proddetail],
    }).compileComponents();

    fixture = TestBed.createComponent(Proddetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
