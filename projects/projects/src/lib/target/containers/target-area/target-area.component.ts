import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutStoreModule, LayoutStoreActions } from 'src/app/store/layout-store';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { Target } from '../../../../api';
import { TargetState } from '../../reducers';
import { Actions, ofType } from '@ngrx/effects';
import { CreateTarget, TargetActionTypes, DeleteTarget } from '../../actions';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { WorkingAreaComponent } from '../working-area';
import { ProjectsService } from '../../../services/projects.service';
import { DeleteItemAction } from 'src/app/store/layout-store/actions';
import { Area } from 'src/app/core';
@Component({
  selector: 'lib-target-area',
  templateUrl: './target-area.component.html',
  styleUrls: ['./target-area.component.scss']
})
export class TargetAreaComponent implements OnInit {
   @ViewChild(WorkingAreaComponent)
   public workingArea: WorkingAreaComponent;
   public organizerProps = [];
   public menuProps =  
    [ 
      { 
        name: 'Delete Target',
        visible: (item) => {
          console.log(item);
          return true;
        },
        enabled: true,
        execute: (node) => this.clearTarget(node.item)
      }
    ];
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
            {label:target.name, value:{id:target.targetId, name: target.name}}  
          )
          this.project$.drawTarget(target);
         }
       ));
      
   }

  clearTarget (node) {
    
    this.targetStore.pipe(first(), select('target', 'targets'))
     .subscribe((targets: Target[]) => {
       const target = targets.find(item => item.targetId === node.id);
       console.log(target);
       this.project$.removeTarget(target);
       this.targetStore.dispatch(new DeleteTarget({target: target}))
       this.layoutStore.dispatch(new DeleteItemAction({item: node}));
     });
  }

  fillOrganizer(target: Target){
    this.layoutStore.dispatch(
      new LayoutStoreActions.AddItemAction({item:
        {value:{id:target.targetId, name: target.name}}})
        );
  }

  ngOnInit() {
    this._subscriptions.push(
      this.update$
      .pipe(ofType(TargetActionTypes.CreateTarget))
       .subscribe((target:CreateTarget) => this.fillOrganizer(target.payload.target))
      );
    this.layoutStore.dispatch(new LayoutStoreActions.CurrentAreaAction({area: Area.Target}));
  }

  ngOnDestroy() {
    this._subscriptions.forEach(sub => sub.unsubscribe());
  }

}
