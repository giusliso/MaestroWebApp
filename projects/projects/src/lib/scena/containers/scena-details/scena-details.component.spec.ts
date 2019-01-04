import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaDetailsComponent } from './scena-details.component';

describe('ScenaDetailsComponent', () => {
  let component: ScenaDetailsComponent;
  let fixture: ComponentFixture<ScenaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScenaDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
