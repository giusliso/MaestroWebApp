import { Component, OnInit, ViewChild } from '@angular/core';
import { ScenarioSummaryComponent } from '../scenario-summary';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { DetailsChangeAction } from 'src/app/store/layout-store/actions';
import { Scenario } from '../../../../api';
import { ScenarioState } from '../../reducers';
import { UpdateScenario } from '../../actions';
@Component({
  selector: 'lib-scenario-details',
  templateUrl: './scenario-details.component.html',
  styleUrls: ['./scenario-details.component.css']
})
export class ScenarioDetailsComponent implements OnInit {
  @ViewChild('summaryTab')
  summaryTab: ScenarioSummaryComponent;

  private currentItem: Scenario;

  constructor(
    private layoutState: Store<LayoutState>,
    private ScenarioState: Store<ScenarioState>
  ) {
    
 
  }


  save() {
    const updatedScenario = this.summaryTab.getSummary();
    if(updatedScenario !== null) {
      this.ScenarioState.dispatch(new UpdateScenario({Scenario: this.summaryTab.getSummary()}));
    }
  }

  revert () {
    this.summaryTab.fillSummary(this.currentItem);
  }

  updateChilds(Scenario){
    this.currentItem = Scenario;
    this.summaryTab.fillSummary(Scenario);
  }

  ngOnInit() {
  
  }

  ngOnDestroy(){

  }

}
