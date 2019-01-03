import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPathCreateDialogComponent } from './learning-path-create-dialog.component';

describe('ScenaCreateDialogComponent', () => {
  let component: LearningPathCreateDialogComponent;
  let fixture: ComponentFixture<LearningPathCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningPathCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningPathCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
