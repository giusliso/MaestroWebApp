import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Scenario, LearningPath, Target } from '../../../../api';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { DetailsChangeAction } from 'src/app/store/layout-store/actions';
import { Subscription } from 'rxjs';
import { Dialog } from 'primeng/dialog';
import { TargetState } from '../../../target';
@Component({
  selector: 'lib-scenario-leaning-paths-tab',
  templateUrl: './scenario-leaning-paths-tab.component.html',
  styleUrls: ['./scenario-leaning-paths-tab.component.css']
})

export class LeaningPathsTabComponent implements OnInit {

    availables: LearningPath[];
      
    currentLinked: LearningPath[];
    constructor(
      private targetStore: Store<TargetState>,
      private layoutStore: Store<LayoutState>){
    }

    ngOnInit() {
        this.availables = [];
        this.currentLinked = [];
    }

    onChange() {
      this.layoutStore
       .dispatch(new DetailsChangeAction({item: null}))
    }

    fillTables(scenario: Scenario) {
      if(scenario === undefined){
        this.availables = [];
        this.currentLinked = [];
        return;
      }
      this.targetStore.pipe(select('learning-path', 'learningPath'))
       .subscribe((learningPath: LearningPath[]) => {
           this.currentLinked = scenario.learningPaths;
           this.availables = learningPath
             .filter(x => this.currentLinked.indexOf(x) === -1);
       });
    }

    getList(): LearningPath[] {
      return this.currentLinked;
    }

}
