import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubseccionPage } from './subseccion.page';

describe('SubseccionPage', () => {
  let component: SubseccionPage;
  let fixture: ComponentFixture<SubseccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubseccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubseccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
