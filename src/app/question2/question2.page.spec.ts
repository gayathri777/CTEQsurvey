import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2Page } from './question2.page';

describe('Question2Page', () => {
  let component: Question2Page;
  let fixture: ComponentFixture<Question2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
