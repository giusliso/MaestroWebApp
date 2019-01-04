import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaSummaryComponent } from './scena-summary.component';

describe('ScenaSummaryComponent', () => {
  let component: ScenaSummaryComponent;
  let fixture: ComponentFixture<ScenaSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScenaSummaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
