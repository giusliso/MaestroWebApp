import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTargetTabComponent } from './link-target-tab.component';

describe('LinkTargetTabComponent', () => {
  let component: LinkTargetTabComponent;
  let fixture: ComponentFixture<LinkTargetTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTargetTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTargetTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
