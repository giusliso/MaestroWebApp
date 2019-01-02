import { Component, OnInit, ViewChild } from '@angular/core';
import { ScenaSummaryComponent } from '../scena-summary';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { DetailsChangeAction } from 'src/app/store/layout-store/actions';
import { Scene } from '../../../../api';
import { SceneState } from '../../reducers';
import { UpdateScene } from '../../actions';
@Component({
  selector: 'lib-scena-details',
  templateUrl: './scena-details.component.html',
  styleUrls: ['./scena-details.component.css']
})
export class ScenaDetailsComponent implements OnInit {
  @ViewChild('summaryTab')
  summaryTab: ScenaSummaryComponent;

  private currentItem: Scene;

  constructor(
    private layoutState: Store<LayoutState>,
    private sceneState: Store<SceneState>
  ) {
    
 
  }


  save() {
    const updatedScene = this.summaryTab.getSummary();
    if(updatedScene !== null) {
      this.sceneState.dispatch(new UpdateScene({scene: this.summaryTab.getSummary()}));
    }
  }

  revert () {
    this.summaryTab.fillSummary(this.currentItem);
  }

  updateChilds(scene){
    this.currentItem = scene;
    this.summaryTab.fillSummary(scene);
  }

  ngOnInit() {
  
  }

  ngOnDestroy(){

  }

}
