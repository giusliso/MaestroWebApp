import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { Actions, ofType } from '@ngrx/effects';
import { LayoutActionTypes } from 'src/app/store/layout-store/actions';
import { Target } from 'src/app/models';
@Component({
  selector: 'lib-target-details',
  templateUrl: './target-details.component.html',
  styleUrls: ['./target-details.component.scss']
})
export class TargetDetailsComponent implements OnInit {

  constructor(
    private layoutStore: Store<LayoutState>,
    private update$: Actions,
  ) {
      this.update$.pipe(select(LayoutActionTypes.ItemSelect))
         .subscribe((node: Target) => console.log(node));
  }

  ngOnInit() {
  }

}
