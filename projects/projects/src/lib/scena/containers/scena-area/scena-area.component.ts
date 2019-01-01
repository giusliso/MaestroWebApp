import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutStoreModule, LayoutStoreActions } from 'src/app/store/layout-store';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { Scene } from '../../../../api';
import { SceneState } from '../../reducers';
import { Actions, ofType } from '@ngrx/effects';
import { Area } from 'src/app/core';
import { CreateScene, SceneActionTypes } from '../../actions';
import { scenarioActionTypes } from '../../../scenario';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ScenaDetailsComponent } from '../scena-details';
import { LayoutActionTypes, ItemSelectAction, CurrentSceneAction, DetailsPersistAction } from 'src/app/store/layout-store/actions';
@Component({
  selector: 'lib-scena-area',
  templateUrl: './scena-area.component.html',
  styleUrls: ['./scena-area.component.scss']
})
export class ScenaAreaComponent implements OnInit {

   public organizerProps = [];
   @ViewChild(ScenaDetailsComponent)
   detailsArea: ScenaDetailsComponent;

   public menuProps =  
   [  
    {label: 'File',
     items:[
        { label: 'New Scena', 
          command: () => this.createScene()
        },
     ]},
   ];
   private _subscriptions: Subscription[] = [];
  constructor(
    private layoutStore: Store<LayoutState>,
    private sceneStore: Store<Scene>,
    private update$: Actions,
    ) {
      this._subscriptions.push(this.update$
        .pipe(ofType(SceneActionTypes.CreateScene))
         .subscribe((scene:CreateScene) => this.fillOrganizer(scene.payload.scene)));
      this._subscriptions.push(
        this.update$.pipe(ofType(LayoutActionTypes.ItemSelect))
        .subscribe((selection: ItemSelectAction) => {
          this.layoutStore.dispatch(new CurrentSceneAction({item: selection.payload.item}))
          this.sceneStore.pipe(select('scene', 'scene'))
            .subscribe((scenes: Scene[]) => {
                const scene = scenes.find(scene => scene.name === selection.payload.item.value.name);
                this.detailsArea.updateChilds(scene);
            });
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
   }


   public save(event: Event) {
    this.detailsArea.save();
  }

  public revert(event: Event) {
    this.detailsArea.revert();
    this.layoutStore.dispatch(new DetailsPersistAction({ item: undefined }));
  }

  createScene() {
    this.sceneStore.dispatch(new CreateScene({ scene: {}}));
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

}
