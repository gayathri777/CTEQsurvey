import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question6Page } from './question6.page';

describe('Question6Page', () => {
  let component: Question6Page;
  let fixture: ComponentFixture<Question6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
