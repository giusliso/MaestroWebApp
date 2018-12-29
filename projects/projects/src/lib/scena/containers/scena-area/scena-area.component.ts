import { Component, OnInit } from '@angular/core';
import { LayoutStoreModule, LayoutStoreActions } from 'src/app/store/layout-store';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';

import { Actions, ofType } from '@ngrx/effects';
@Component({
  selector: 'lib-scena-area',
  templateUrl: './scena-area.component.html',
  styleUrls: ['./scena-area.component.scss']
})
export class ScenaAreaComponent implements OnInit {
   public organizerProps = [];
   public menuProps =  [
     {label: 'Create New Scene'},
     {
       label: 'Delete Scene',
       visible: (event) => console.log(event)
      }
   ];
  constructor(
    private layoutStore: Store<LayoutState>,
    private update$: Actions,
    ) {
   }



  ngOnInit() {
    this.layoutStore.dispatch(new LayoutStoreActions.CurrentAreaAction({area: 'SCENA'}));
  }

}
