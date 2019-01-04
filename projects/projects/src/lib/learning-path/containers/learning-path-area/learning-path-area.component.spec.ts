import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPathAreaComponent } from './learning-path-area.component';

describe('LearningPathAreaComponent ', () => {
  let component: LearningPathAreaComponent;
  let fixture: ComponentFixture<LearningPathAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LearningPathAreaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningPathAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
