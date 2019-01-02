import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaCreateDialogComponent } from './scena-create-dialog.component';

describe('ScenaCreateDialogComponent', () => {
  let component: ScenaCreateDialogComponent;
  let fixture: ComponentFixture<ScenaCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenaCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
