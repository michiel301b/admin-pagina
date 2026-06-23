import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allgames } from './allgames';

describe('Allgames', () => {
  let component: Allgames;
  let fixture: ComponentFixture<Allgames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allgames],
    }).compileComponents();

    fixture = TestBed.createComponent(Allgames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
