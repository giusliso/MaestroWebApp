import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreateDialogComponent } from './content-create-dialog.component';

describe('ContentCreateDialogComponent', () => {
  let component: ContentCreateDialogComponent;
  let fixture: ComponentFixture<ContentCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentCreateDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
