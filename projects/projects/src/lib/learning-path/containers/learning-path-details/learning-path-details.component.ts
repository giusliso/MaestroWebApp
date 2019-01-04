import { Component, OnInit, ViewChild } from '@angular/core';
import { LearningPathSummaryComponent } from '../learning-path-summary';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { DetailsChangeAction } from 'src/app/store/layout-store/actions';
import { LearningPath } from '../../../../api';
import { LearningPathState } from '../../reducers';
import { UpdateLearningPath } from '../../actions';
import { LinkTargetTabComponent } from '../link-target-tab';
@Component({
  selector: 'lib-learning-path-details',
  templateUrl: './learning-path-details.component.html',
  styleUrls: ['./learning-path-details.component.css']
})
export class LearningPathDetailsComponent implements OnInit {
  @ViewChild('summaryTab')
  summaryTab: LearningPathSummaryComponent;

  @ViewChild('targetTab')
  targetTab: LinkTargetTabComponent;

  private currentItem: LearningPath;

  constructor(
    private layoutState: Store<LayoutState>,
    private LearningPathState: Store<LearningPathState>
  ) {
    
 
  }


  save() {
    const updatedLearningPath = this.summaryTab.getSummary();
    if(updatedLearningPath !== null) {
      updatedLearningPath.targets = this.targetTab.getList();
      this.LearningPathState.dispatch(new UpdateLearningPath({learningPath: this.summaryTab.getSummary()}));
    }
  }

  revert () {
    this.summaryTab.fillSummary(this.currentItem);
    this.targetTab.fillTables(this.currentItem);
  }

  updateChilds(learningPath){
    this.currentItem = learningPath;
    this.summaryTab.fillSummary(learningPath);
    this.targetTab.fillTables(learningPath);
  }

  ngOnInit() {
  
  }

  ngOnDestroy(){

  }

}
