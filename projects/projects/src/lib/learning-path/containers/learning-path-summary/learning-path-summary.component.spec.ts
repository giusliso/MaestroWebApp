import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPathSummaryComponent } from './learning-path-summary.component';

describe('LearningPathSummaryComponent', () => {
  let component: LearningPathSummaryComponent;
  let fixture: ComponentFixture<LearningPathSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LearningPathSummaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningPathSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
