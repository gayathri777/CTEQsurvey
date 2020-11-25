import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentPagePage } from './consent-page.page';

describe('ConsentPagePage', () => {
  let component: ConsentPagePage;
  let fixture: ComponentFixture<ConsentPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
