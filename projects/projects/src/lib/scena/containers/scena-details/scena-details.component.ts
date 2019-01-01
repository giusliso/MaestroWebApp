import { Component, OnInit, ViewChild } from '@angular/core';
import { ScenaSummaryComponent } from '../scena-summary';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { DetailsChangeAction } from 'src/app/store/layout-store/actions';

@Component({
  selector: 'lib-scena-details',
  templateUrl: './scena-details.component.html',
  styleUrls: ['./scena-details.component.css']
})
export class ScenaDetailsComponent implements OnInit {
  @ViewChild('summaryTab')
  summaryTab: ScenaSummaryComponent;

  constructor(
    private layoutState: Store<LayoutState>
  ) {
    
 
  }


  save() {

  }

  revert () {
    console.log("reverted");
  }

  updateChilds(target){
    this.summaryTab.fillSummary(target);


  }

  ngOnInit() {
  
  }

  ngOnDestroy(){

  }

}
