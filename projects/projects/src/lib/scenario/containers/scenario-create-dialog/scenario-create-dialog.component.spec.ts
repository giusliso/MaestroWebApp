import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioCreateDialogComponent } from './scenario-create-dialog.component';

describe('ScenaCreateDialogComponent', () => {
  let component: ScenarioCreateDialogComponent;
  let fixture: ComponentFixture<ScenarioCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
