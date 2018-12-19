import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetSummaryComponent } from './target-summary.component';

describe('TargetSummaryComponent', () => {
  let component: TargetSummaryComponent;
  let fixture: ComponentFixture<TargetSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
