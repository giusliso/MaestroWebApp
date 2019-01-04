import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioAreaComponent } from './scenario-area.component';

describe('ScenarioAreaComponent', () => {
  let component: ScenarioAreaComponent;
  let fixture: ComponentFixture<ScenarioAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScenarioAreaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
