import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposPriorizariosPage } from './grupos-priorizarios.page';

describe('GruposPriorizariosPage', () => {
  let component: GruposPriorizariosPage;
  let fixture: ComponentFixture<GruposPriorizariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposPriorizariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposPriorizariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
