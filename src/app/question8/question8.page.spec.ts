import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question8Page } from './question8.page';

describe('Question8Page', () => {
  let component: Question8Page;
  let fixture: ComponentFixture<Question8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
