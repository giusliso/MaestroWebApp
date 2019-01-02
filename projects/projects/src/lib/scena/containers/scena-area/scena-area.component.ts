import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutStoreModule, LayoutStoreActions } from 'src/app/store/layout-store';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { Scene } from '../../../../api';
import { SceneState } from '../../reducers';
import { Actions, ofType } from '@ngrx/effects';
import { Area } from 'src/app/core';
import { CreateScene, SceneActionTypes, UpdateScene, DeleteScene } from '../../actions';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ScenaDetailsComponent } from '../scena-details';
import { LayoutActionTypes, ItemSelectAction, CurrentSceneAction, DetailsPersistAction, LandMarkSetAction, UpdateItemAction, DeleteItemAction } from 'src/app/store/layout-store/actions';
import { ScenaCreateDialogComponent } from '../scena-create-dialog';
@Component({
  selector: 'lib-scena-area',
  templateUrl: './scena-area.component.html',
  styleUrls: ['./scena-area.component.scss']
})
export class ScenaAreaComponent implements OnInit {

   public organizerProps = [];
   @ViewChild(ScenaDetailsComponent)
   detailsArea: ScenaDetailsComponent;

   @ViewChild(ScenaCreateDialogComponent)
   createScenaDialog: ScenaCreateDialogComponent;

   public menuProps =  
   [  
    {label: 'File',
     items:[
        { label: 'New Scena', 
          command: () => this.createScene()
        },
     ]},
   ];

   public contextMenu  =  
   [ 
     { 
       name: 'Delete Scena',
       visible: (item) => {
         console.log(item);
         return true;
       },
       enabled: true,
       execute: (node) => this.deleteScena(node.item)
     }
   ];
   private _subscriptions: Subscription[] = [];
  constructor(
    private layoutStore: Store<LayoutState>,
    private sceneStore: Store<Scene>,
    private update$: Actions,
    ) {
      this._subscriptions.push(this.update$
        .pipe(ofType(SceneActionTypes.UpdateScene))
         .subscribe((scene:UpdateScene) => {
          this.layoutStore.dispatch(
            new UpdateItemAction({item:
             {value:{id:scene.payload.scene.sceneId, name: scene.payload.scene.name}}}
             ));
          this.layoutStore.dispatch(new DetailsPersistAction({item: null}))
         }));
      this._subscriptions.push(this.update$
        .pipe(ofType(SceneActionTypes.CreateScene))
         .subscribe((scene:CreateScene) => this.fillOrganizer(scene.payload.scene)));
      this._subscriptions.push(
        this.update$.pipe(ofType(LayoutActionTypes.ItemSelect))
        .subscribe((selection: ItemSelectAction) => {
          this.layoutStore.dispatch(new CurrentSceneAction({item: selection.payload.item}))
          this.sceneStore.pipe(select('scene', 'scene'))
            .subscribe((scenes: Scene[]) => {
                const scene = scenes.find(scene => scene.sceneId === selection.payload.item.value.id);
                this.detailsArea.updateChilds(scene);
            });
        })
      );

      // Set background working area.
      this._subscriptions.push(
        this.update$.pipe(ofType(LayoutActionTypes.ItemSelect))
         .subscribe((action : ItemSelectAction) => {
            this.sceneStore.pipe(first(), select('scene', 'scene'))
             .subscribe(scenes => {
               const selectedScene = scenes.find(scene => scene.sceneId === action.payload.item.value.id);
               this.layoutStore.dispatch(new LandMarkSetAction({landmark: selectedScene.landmark}));
             })
         })
      );

      this.sceneStore.pipe(first(), select('scene', 'scene'))
      .subscribe(scenes => scenes.forEach(
        (scene: Scene) => {
         this.organizerProps.push(
           {value:{id:scene.sceneId, name: scene.name}}  
         )
        }
      ));

      // Action to do whene there aren't scenes after deletion
      this._subscriptions.push(
        this.update$.pipe(ofType(SceneActionTypes.DeleteScene))
         .subscribe(() =>   this.sceneStore.pipe(first(), select('scene', 'scene'))
         .subscribe(
           (scenes: Scene[]) => {
             if(scenes.length === 0){
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

  createScene() {
    this.createScenaDialog.showDialog();
   // this.sceneStore.dispatch(new CreateScene({ scene: {}}));
  }

  fillOrganizer(scene: Scene){
    this.layoutStore.dispatch(
      new LayoutStoreActions.AddItemAction({item:
        {value:{id:scene.sceneId, name: scene.name}}})
        );
  }

  ngOnInit() {
    this.layoutStore.dispatch(new LayoutStoreActions.CurrentAreaAction({area: Area.Scene}));
  }

  ngOnDestroy(){
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  
  private deleteScena (node) {
    
    this.sceneStore.pipe(first(), select('scene', 'scene'))
     .subscribe((scenes: Scene[]) => {
       const scene = scenes.find(item => item.sceneId === node.id);
       this.sceneStore.dispatch(new DeleteScene({scene: scene}))
       this.layoutStore.dispatch(new DeleteItemAction({item: node}));
     });
  }

}
