import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutStoreModule, LayoutStoreActions } from 'src/app/store/layout-store';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { Target } from '../../../../api';
import { TargetState } from '../../reducers';
import { Actions, ofType } from '@ngrx/effects';
import { CreateTarget, TargetActionTypes, DeleteTarget, UpdateTarget } from '../../actions';
import { Subscription } from 'rxjs';
import { first, filter } from 'rxjs/operators';
import { WorkingAreaComponent } from '../working-area';
import { ProjectsService } from '../../../services/projects.service';
import { DeleteItemAction, LayoutActionTypes, ItemSelectAction, DetailsPersistAction, UpdateItemAction } from 'src/app/store/layout-store/actions';
import { Area } from 'src/app/core';
import { TargetDetailsComponent } from '../target-details';
@Component({
  selector: 'lib-target-area',
  templateUrl: './target-area.component.html',
  styleUrls: ['./target-area.component.scss']
})
export class TargetAreaComponent implements OnInit {
   @ViewChild(WorkingAreaComponent)
   public workingArea: WorkingAreaComponent;

   @ViewChild(TargetDetailsComponent)
   public detailsArea: TargetDetailsComponent;

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
   private currentScene; 
  constructor(
    private layoutStore: Store<LayoutState>,
    private targetStore: Store<TargetState>,
    private update$: Actions,
    private project$: ProjectsService
    ) {
      // Load targets
      this.layoutStore.pipe(first(), select('layout', 'currentScene'))
        .subscribe(scene => this.currentScene = scene);
      this.targetStore.pipe(
        first(), 
        select('target', 'targets'))
         .subscribe(targets => targets
         .filter( target => target.sceneId === this.currentScene.value.id)
         .forEach(
          (target: Target) => {
            this.organizerProps.push(
              {value:{id:target.targetId, name: target.name}}  
            )
         }
       ));
      
   }

  public save(event: Event) {
    this.detailsArea.save();
  }

  public revert(event: Event) {
    this.detailsArea.revert();
    this.layoutStore.dispatch(new DetailsPersistAction({ item: undefined }));
  }

  clearTarget (node) {
    
    this.targetStore.pipe(first(), select('target', 'targets'))
     .subscribe((targets: Target[]) => {
       const target = targets.find(item => item.targetId === node.id);
       this.targetStore.dispatch(new DeleteTarget({target: target}))
       this.layoutStore.dispatch(new DeleteItemAction({item: node}));
       this.project$.removeTarget(target);
     });
  }

  fillOrganizer(target: Target){
    this.layoutStore.dispatch(
      new LayoutStoreActions.AddItemAction({item:
        {value:{id:target.targetId, name: target.name}}})
        );
  }

  ngOnInit() {
    // Subscription when Target is updated
    this._subscriptions.push(this.update$
      .pipe(ofType(TargetActionTypes.UpdateTarget))
        .subscribe((target:UpdateTarget) => {
        this.layoutStore.dispatch(
          new UpdateItemAction({item:
            {value:{id:target.payload.target.targetId, name: target.payload.target.name}}}
            ));
        this.layoutStore.dispatch(new DetailsPersistAction({item: null}))
        }));

    this._subscriptions.push(
      this.update$
      .pipe(ofType(TargetActionTypes.CreateTarget))
       .subscribe((target:CreateTarget) => this.fillOrganizer(target.payload.target))
      );
    this._subscriptions.push(
      this.update$.pipe(ofType(LayoutActionTypes.ItemSelect))
      .subscribe((selection: ItemSelectAction) => {
        this.targetStore.pipe(select('target', 'targets'))
          .subscribe((targets: Target[]) => {
             const target = targets.find(target => target.name === selection.payload.item.value.name);
             this.detailsArea.updateChilds(target);
             this.workingArea.drawCoordinates(target.coordinateX, target.coordinateY, true);
          });
      })
    );
    this.layoutStore.dispatch(new LayoutStoreActions.CurrentAreaAction({area: Area.Target}));
  }

  ngOnDestroy() {
    this._subscriptions.forEach(sub => sub.unsubscribe());
  }

}
