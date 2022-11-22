import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPartidosComponent } from './crear-partidos.component';

describe('CrearPartidosComponent', () => {
  let component: CrearPartidosComponent;
  let fixture: ComponentFixture<CrearPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPartidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
