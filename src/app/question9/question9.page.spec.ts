import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question9Page } from './question9.page';

describe('Question9Page', () => {
  let component: Question9Page;
  let fixture: ComponentFixture<Question9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
