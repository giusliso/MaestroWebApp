import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaningPathsTabComponent } from './scenario-leaning-paths-tab.component';

describe('LeaningPathsTabComponent', () => {
  let component: LeaningPathsTabComponent;
  let fixture: ComponentFixture<LeaningPathsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeaningPathsTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaningPathsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
