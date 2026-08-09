import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Instrumentos } from './instrumentos';

describe('Instrumentos', () => {
  let component: Instrumentos;
  let fixture: ComponentFixture<Instrumentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Instrumentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Instrumentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
