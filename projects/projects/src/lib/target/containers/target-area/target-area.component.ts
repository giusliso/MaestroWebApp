import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutStoreModule, LayoutStoreActions } from 'src/app/store/layout-store';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';

import { Target } from 'src/app/models';
import { TargetState } from '../../reducers';
import { Actions, ofType } from '@ngrx/effects';
import { CreateTarget, TargetActionTypes } from '../../actions';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { WorkingAreaComponent } from '../working-area';
import { ProjectsService } from '../../../services/projects.service';
@Component({
  selector: 'lib-target-area',
  templateUrl: './target-area.component.html',
  styleUrls: ['./target-area.component.scss']
})
export class TargetAreaComponent implements OnInit {
   @ViewChild(WorkingAreaComponent)
   public workingArea: WorkingAreaComponent;

   public organizerProps = [];
   private _subscriptions: Subscription[] = [];
  constructor(
    private layoutStore: Store<LayoutState>,
    private targetStore: Store<TargetState>,
    private update$: Actions,
    private project$: ProjectsService
    ) {

      console.log(this.workingArea);
      this.targetStore.pipe(first(), select('target', 'targets'))
       .subscribe(targets => targets.forEach(
         (target: Target) => {
          this.organizerProps.push(
            {label:target.name, value:{id:target, name: target.name}}  
          )
          console.log(target.position);
          this.project$.drawTarget(target);
         }
       ));
      
   }


  fillOrganizer(target: Target){
    this.layoutStore.dispatch(
      new LayoutStoreActions.AddItemAction({item:
        {label:this.organizerProps.length + 1, value:{id:this.organizerProps.length + 1, name: target.name}}})
        );
  }

  ngOnInit() {
    this._subscriptions.push(
      this.update$
      .pipe(ofType(TargetActionTypes.CreateTarget))
       .subscribe((target:CreateTarget) => this.fillOrganizer(target.payload.target))
      );
    this.layoutStore.dispatch(new LayoutStoreActions.CurrentAreaAction({area: 'TARGET'}));
  }

  ngOnDestroy() {
    this._subscriptions.forEach(sub => sub.unsubscribe());
  }

}
