import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetAreaComponent } from './target-area.component';

describe('TargetAreaComponent', () => {
  let component: TargetAreaComponent;
  let fixture: ComponentFixture<TargetAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
