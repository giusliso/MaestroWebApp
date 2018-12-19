import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { Actions, ofType } from '@ngrx/effects';
import { LayoutActionTypes, ItemSelectAction } from 'src/app/store/layout-store/actions';
import { Target } from 'src/app/models';
import { TargetState } from '../../reducers';
import { CreateTarget } from '../../actions';
import { TargetSummaryComponent } from '../target-summary/target-summary.component';
@Component({
  selector: 'lib-target-details',
  templateUrl: './target-details.component.html',
  styleUrls: ['./target-details.component.scss']
})
export class TargetDetailsComponent implements OnInit {
  @ViewChild('summaryTab')
  summaryTab: TargetSummaryComponent;

  constructor(
    private layoutStore: Store<LayoutState>,
    private targetStore: Store<TargetState>,
    private update$: Actions,
  ) {
      this.update$.pipe(ofType(LayoutActionTypes.ItemSelect))
         .subscribe((selection: ItemSelectAction) => {
           console.log(selection.payload.item.value.name);
           this.targetStore.pipe(select('target', 'targets'))
             .subscribe((targets: Target[]) => {
                const target = targets.find(target => target.name === selection.payload.item.value.name);
                this.updateChilds(target);
             });
         });
  }

  updateChilds(target){
    this.summaryTab.fillSummary(target);
  }

  ngOnInit() {
  }

}
