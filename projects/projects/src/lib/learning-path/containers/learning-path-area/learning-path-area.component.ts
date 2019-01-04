import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutStoreModule, LayoutStoreActions } from 'src/app/store/layout-store';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { LearningPath } from '../../../../api';
import { LearningPathState } from '../../reducers';
import { Actions, ofType } from '@ngrx/effects';
import { Area } from 'src/app/core';
import { CreateLearningPath, UpdateLearningPath, DeleteLearningPath, LearningPathActionTypes } from '../../actions';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { LearningPathDetailsComponent } from '../learning-path-details';
import { LayoutActionTypes, ItemSelectAction, DetailsPersistAction, LandMarkSetAction, UpdateItemAction, DeleteItemAction } from 'src/app/store/layout-store/actions';
import { LearningPathCreateDialogComponent } from '../learning-path-create-dialog';

@Component({
  selector: 'lib-learning-path-area',
  templateUrl: './learning-path-area.component.html',
  styleUrls: ['./learning-path-area.component.scss']
})
export class LearningPathAreaComponent implements OnInit {

   private currentScene;
   public organizerProps = [];
   @ViewChild(LearningPathDetailsComponent)
   detailsArea: LearningPathDetailsComponent;

   @ViewChild(LearningPathCreateDialogComponent)
   createScenaDialog: LearningPathCreateDialogComponent;

   public menuProps =  
   [  
    {label: 'File',
     items:[
        { label: 'New LearningPath', 
          command: () => this.createLearningPath()
        },
     ]},
   ];

   public contextMenu  =  
   [ 
     { 
       name: 'Delete LearningPath',
       visible: (item) => {
         return true;
       },
       enabled: true,
       execute: (node) => this.deleteLearningPath(node.item)
     }
   ];
   private _subscriptions: Subscription[] = [];
   
  constructor(
    private layoutStore: Store<LayoutState>,
    private LearningPathStore: Store<LearningPath>,
    private update$: Actions,
    ) {

      // Subscription when LearningPath is updated
      this._subscriptions.push(this.update$
        .pipe(ofType(LearningPathActionTypes.UpdateLearningPath))
         .subscribe((LearningPath:UpdateLearningPath) => {
          this.layoutStore.dispatch(
            new UpdateItemAction({item:
             {value:{id:LearningPath.payload.learningPath.learningPathId, name: LearningPath.payload.learningPath.name}}}
             ));
          this.layoutStore.dispatch(new DetailsPersistAction({item: null}))
         }));

      // subscription when new LearningPath is created.
      this._subscriptions.push(this.update$
        .pipe(ofType(LearningPathActionTypes.CreateLearningPath))
         .subscribe((LearningPath:CreateLearningPath) => this.fillOrganizer(LearningPath.payload.learningPath)));

      // Subscription for update details
      this._subscriptions.push(
        this.update$.pipe(ofType(LayoutActionTypes.ItemSelect))
        .subscribe((selection: ItemSelectAction) => {
          this.LearningPathStore.pipe(select('learning-path', 'learningPath'))
            .subscribe((LearningPaths: LearningPath[]) => {
                const LearningPath = LearningPaths.find(LearningPath => LearningPath.learningPathId === selection.payload.item.value.id);
                this.detailsArea.updateChilds(LearningPath);
            });
        })
      );

      // Load learning paths
      this.layoutStore.pipe(first(), select('layout', 'currentScene'))
      .subscribe(scene => this.currentScene = scene);

      this.LearningPathStore.pipe(first(), select('learning-path', 'learningPath'))
      .subscribe(learningPaths => 
        learningPaths
          .filter( target => target.sceneId === this.currentScene.value.id)
          .forEach(
            (LearningPath: LearningPath) => {
            this.organizerProps.push(
              {value:{id:LearningPath.learningPathId, name: LearningPath.name}}  
            )
            }
          ));

      // Action to do whene there aren't LearningPaths after deletion
      this._subscriptions.push(
        this.update$.pipe(ofType(LearningPathActionTypes.DeleteLearningPath))
         .subscribe(() =>   this.LearningPathStore.pipe(first(), select('learning-path', 'learningPath'))
         .subscribe(
           (LearningPaths: LearningPath[]) => {
             if(LearningPaths.length === 0){
               this.detailsArea.updateChilds(undefined);
               this.layoutStore.dispatch(new LandMarkSetAction({landmark: undefined}));
             }
           }
         )));
   }


   public save(event: Event) {
    this.detailsArea.save();
  }

  public revert(event: Event) {
    this.detailsArea.revert();
    this.layoutStore.dispatch(new DetailsPersistAction({ item: undefined }));
  }

  createLearningPath() {
    this.createScenaDialog.showDialog();
   // this.LearningPathStore.dispatch(new CreateLearningPath({ LearningPath: {}}));
  }

  fillOrganizer(LearningPath: LearningPath){
    this.layoutStore.dispatch(
      new LayoutStoreActions.AddItemAction({item:
        {value:{id:LearningPath.learningPathId, name: LearningPath.name}}})
        );
  }

  ngOnInit() {
    this.layoutStore.dispatch(new LayoutStoreActions.CurrentAreaAction({area: Area.LearningPath}));
  }

  ngOnDestroy(){
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  
  private deleteLearningPath (node) {
    
    this.LearningPathStore.pipe(first(), select('learning-path', 'learningPath'))
     .subscribe((LearningPaths: LearningPath[]) => {
       const learningPath = LearningPaths.find(item => item.learningPathId === node.id);
       this.LearningPathStore.dispatch(new DeleteLearningPath({learningPath: learningPath}))
       this.layoutStore.dispatch(new DeleteItemAction({item: node}));
     });
  }

}
