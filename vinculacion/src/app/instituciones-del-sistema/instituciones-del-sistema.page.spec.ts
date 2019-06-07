import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionesDelSistemaPage } from './instituciones-del-sistema.page';

describe('InstitucionesDelSistemaPage', () => {
  let component: InstitucionesDelSistemaPage;
  let fixture: ComponentFixture<InstitucionesDelSistemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitucionesDelSistemaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionesDelSistemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
