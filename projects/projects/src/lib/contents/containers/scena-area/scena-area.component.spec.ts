import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaAreaComponent } from './scena-area.component';

describe('ScenaAreaComponent', () => {
  let component: ScenaAreaComponent;
  let fixture: ComponentFixture<ScenaAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenaAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
