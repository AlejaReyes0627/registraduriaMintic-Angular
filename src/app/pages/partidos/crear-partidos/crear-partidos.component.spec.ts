import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearComponent } from './crear-partidos.component';

describe('CrearPartidosComponent', () => {
  let component: CrearComponent;
  let fixture: ComponentFixture<CrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
