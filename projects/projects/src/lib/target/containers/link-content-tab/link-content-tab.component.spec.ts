import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkContentTabComponent } from './link-content-tab.component';

describe('LinkContentTabComponent', () => {
  let component: LinkContentTabComponent;
  let fixture: ComponentFixture<LinkContentTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinkContentTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkContentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
