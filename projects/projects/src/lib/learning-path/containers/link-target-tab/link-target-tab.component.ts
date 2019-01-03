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
  selector: 'lib-link-target-tab',
  templateUrl: './link-target-tab.component.html',
  styleUrls: ['./link-target-tab.component.css']
})

export class LinkTargetTabComponent implements OnInit {

    availables: Target[];
      
    currentLinked: Target[];
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

    fillTables(learningPath: LearningPath) {
      if(learningPath === undefined){
        this.availables = [];
        this.currentLinked = [];
        return;
      }
      this.targetStore.pipe(select('target', 'targets'))
       .subscribe((target: Target[]) => {
           this.currentLinked = learningPath.targets;
           this.availables = target
             .filter(x => this.currentLinked.indexOf(x) === -1);
       });
    }

    getList(): LearningPath[] {
      return this.currentLinked;
    }

}
