import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutStoreModule, LayoutStoreActions } from 'src/app/store/layout-store';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { Scenario } from '../../../../api';
import { ScenarioState } from '../../reducers';
import { Actions, ofType } from '@ngrx/effects';
import { Area } from 'src/app/core';
import { CreateScenario, UpdateScenario, DeleteScenario, ScenarioActionTypes } from '../../actions';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ScenarioDetailsComponent } from '../scenario-details';
import { LayoutActionTypes, ItemSelectAction, DetailsPersistAction, LandMarkSetAction, UpdateItemAction, DeleteItemAction } from 'src/app/store/layout-store/actions';
import { ScenarioCreateDialogComponent } from '../scenario-create-dialog';

@Component({
  selector: 'lib-scenario-area',
  templateUrl: './scenario-area.component.html',
  styleUrls: ['./scenario-area.component.scss']
})
export class ScenarioAreaComponent implements OnInit {

   public organizerProps = [];
   @ViewChild(ScenarioDetailsComponent)
   detailsArea: ScenarioDetailsComponent;

   @ViewChild(ScenarioCreateDialogComponent)
   createScenaDialog: ScenarioCreateDialogComponent;

   public currentScene; 

   public menuProps =  
   [  
    {label: 'File',
     items:[
        { label: 'New Scenario', 
          command: () => this.createScenario()
        },
     ]},
   ];

   public contextMenu  =  
   [ 
     { 
       name: 'Delete Scenario',
       visible: (item) => {
         return true;
       },
       enabled: true,
       execute: (node) => this.deleteScenario(node.item)
     }
   ];
   private _subscriptions: Subscription[] = [];
  constructor(
    private layoutStore: Store<LayoutState>,
    private scenarioStore: Store<Scenario>,
    private update$: Actions,
    ) {

      // Load scenarios
      this.layoutStore.pipe(first(), select('layout', 'currentScene'))
        .subscribe(scene => this.currentScene = scene);
     
      this.scenarioStore.pipe(first(), select('scenario', 'scenario'))
      .subscribe(scenarios => scenarios
        .filter( scenario => scenario.sceneId === this.currentScene.value.id)
        .forEach(
          (Scenario: Scenario) => {
          this.organizerProps.push(
            {value:{id:Scenario.scenarioId, name: Scenario.name}}  
          )}
      ));

      // Subscription when scenario is updated
      this._subscriptions.push(this.update$
        .pipe(ofType(ScenarioActionTypes.UpdateScenario))
         .subscribe((Scenario:UpdateScenario) => {
          this.layoutStore.dispatch(
            new UpdateItemAction({item:
             {value:{id:Scenario.payload.scenario.scenarioId, name: Scenario.payload.scenario.name}}}
             ));
          this.layoutStore.dispatch(new DetailsPersistAction({item: null}))
         }));

      // subscription when new scenario is created.
      this._subscriptions.push(this.update$
        .pipe(ofType(ScenarioActionTypes.CreateScenario))
         .subscribe((Scenario:CreateScenario) => this.fillOrganizer(Scenario.payload.scenario)));

      // Subscription for update details
      this._subscriptions.push(
        this.update$.pipe(ofType(LayoutActionTypes.ItemSelect))
        .subscribe((selection: ItemSelectAction) => {
          this.scenarioStore.pipe(select('scenario', 'scenario'))
            .subscribe((Scenarios: Scenario[]) => {
                const Scenario = Scenarios.find(Scenario => Scenario.scenarioId === selection.payload.item.value.id);
                this.detailsArea.updateChilds(Scenario);
            });
        })
      );

      // Action to do whene there aren't Scenarios after deletion
      this._subscriptions.push(
        this.update$.pipe(ofType(ScenarioActionTypes.DeleteScenario))
         .subscribe(() =>   this.scenarioStore.pipe(first(), select('scenario', 'scenario'))
         .subscribe(
           (Scenarios: Scenario[]) => {
             if(Scenarios.length === 0){
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

  createScenario() {
    this.createScenaDialog.showDialog();
   // this.scenarioStore.dispatch(new CreateScenario({ Scenario: {}}));
  }

  fillOrganizer(Scenario: Scenario){
    this.layoutStore.dispatch(
      new LayoutStoreActions.AddItemAction({item:
        {value:{id:Scenario.scenarioId, name: Scenario.name}}})
        );
  }

  ngOnInit() {
    this.layoutStore.dispatch(new LayoutStoreActions.CurrentAreaAction({area: Area.Scenarios}));
  }

  ngOnDestroy(){
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  
  private deleteScenario (node) {
    
    this.scenarioStore.pipe(first(), select('scenario', 'scenario'))
     .subscribe((Scenarios: Scenario[]) => {
       const Scenario = Scenarios.find(item => item.scenarioId === node.id);
       this.scenarioStore.dispatch(new DeleteScenario({scenario: Scenario}))
       this.layoutStore.dispatch(new DeleteItemAction({item: node}));
     });
  }

}
