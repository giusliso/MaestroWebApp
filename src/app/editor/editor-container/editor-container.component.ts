import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, select, State } from '@ngrx/store';
import { State as LayoutState } from 'src/app/store/layout-store/reducer';
import { Actions, ofType } from '@ngrx/effects';
import { LayoutActionTypes } from 'src/app/store/layout-store/actions';

@Component({
  selector: 'app-editor-container',
  templateUrl: './editor-container.component.html',
  styleUrls: ['./editor-container.component.scss']
})
export class EditorContainerComponent implements OnInit {
  @Input()
  organizerProps;

  @Input()
  contextMenuProps;

  @Input()
  menuProps;

  @Output()
  public save = new EventEmitter();
  @Output()
  public revert = new EventEmitter();

  public displayDialog = false;
  public TextDialog = '';

  constructor(
    private layoutState: Store<LayoutState>,
    private update$: Actions
  ) {
    this.update$
      .pipe(ofType(LayoutActionTypes.NavigationDenied))
      .subscribe(() => {
        this.displayDialog = true;
        this.TextDialog = 'Navigation Denied';
      });
  }

  ngOnInit() {}

  onSave(event: Event) {
    this.save.emit('Save');
  }

  onRevert(event: Event) {
    this.revert.emit('Revert');
  }
}
