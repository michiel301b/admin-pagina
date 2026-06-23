import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infobox } from './infobox';

describe('Infobox', () => {
  let component: Infobox;
  let fixture: ComponentFixture<Infobox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infobox],
    }).compileComponents();

    fixture = TestBed.createComponent(Infobox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
