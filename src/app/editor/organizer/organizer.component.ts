import { Component, OnInit, Input } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { LayoutStoreModule, LayoutStoreActions } from 'src/app/store/layout-store';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { Actions, ofType } from '@ngrx/effects';
import { LayoutActionTypes, AddItemAction } from 'src/app/store/layout-store/actions';
@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {
  @Input()
  props: SelectItem[] = [];

  selecteditem: any;

  constructor(
    private layoutStore: Store<LayoutState>,
    private update$: Actions,
  ) {
    this.update$.pipe(ofType(LayoutActionTypes.AddItem))
      .subscribe(
        (node: AddItemAction) => {
          console.log(node);
          this.props.push(node.payload.item);
          this.props = [...this.props];
          this.selecteditem = node.payload.item;
        }
      );
  }

  ngOnInit() {
  }

}
