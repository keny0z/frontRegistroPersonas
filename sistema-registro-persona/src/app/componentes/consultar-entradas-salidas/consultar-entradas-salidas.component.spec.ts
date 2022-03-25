import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEntradasSalidasComponent } from './consultar-entradas-salidas.component';

describe('ConsultarEntradasSalidasComponent', () => {
  let component: ConsultarEntradasSalidasComponent;
  let fixture: ComponentFixture<ConsultarEntradasSalidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarEntradasSalidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEntradasSalidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
