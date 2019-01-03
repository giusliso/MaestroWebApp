import { Component, OnInit, ViewChild } from '@angular/core';
import { ScenarioSummaryComponent } from '../scenario-summary';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { DetailsChangeAction } from 'src/app/store/layout-store/actions';
import { Scenario } from '../../../../api';
import { ScenarioState } from '../../reducers';
import { UpdateScenario } from '../../actions';
import { LeaningPathsTabComponent } from '../scenario-leaning-paths-tab';
@Component({
  selector: 'lib-scenario-details',
  templateUrl: './scenario-details.component.html',
  styleUrls: ['./scenario-details.component.css']
})
export class ScenarioDetailsComponent implements OnInit {
  @ViewChild('summaryTab')
  summaryTab: ScenarioSummaryComponent;

  @ViewChild('learningPathTab')
  learningPathTab: LeaningPathsTabComponent;

  private currentItem: Scenario;

  constructor(
    private layoutState: Store<LayoutState>,
    private ScenarioState: Store<ScenarioState>
  ) {
    
 
  }


  save() {
    let updatedScenario = this.summaryTab.getSummary();
    if(updatedScenario !== null) {

      updatedScenario.learningPaths = this.learningPathTab.getList();

      this.ScenarioState.dispatch(new UpdateScenario({Scenario: updatedScenario}));
    }
  }

  revert () {
    this.summaryTab.fillSummary(this.currentItem);
    this.learningPathTab.fillTables(this.currentItem);
  }

  updateChilds(scenario){
    this.currentItem = scenario;
    this.summaryTab.fillSummary(scenario);
    this.learningPathTab.fillTables(scenario);
  }

  ngOnInit() {
  
  }

  ngOnDestroy(){

  }

}
