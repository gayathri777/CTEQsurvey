import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPaperPage } from './survey-paper.page';

describe('SurveyPaperPage', () => {
  let component: SurveyPaperPage;
  let fixture: ComponentFixture<SurveyPaperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPaperPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPaperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
