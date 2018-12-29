import { Component, OnInit } from '@angular/core';
import { LayoutStoreModule, LayoutStoreActions } from 'src/app/store/layout-store';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';

import { Actions, ofType } from '@ngrx/effects';
@Component({
  selector: 'lib-scenario-area',
  templateUrl: './scenario-area.component.html',
  styleUrls: ['./scenario-area.component.scss']
})
export class ScenarioAreaComponent implements OnInit {
   public organizerProps = [];
   public menuProps =  
   [  
    {
      label: 'File',
      items:[
        { label: 'New Scenario', 
          command: () => alert("scena creata")
        },
     ]},
   ];

  constructor(
    private layoutStore: Store<LayoutState>,
    private update$: Actions,
    ) {
      
   }



  ngOnInit() {
    this.layoutStore.dispatch(new LayoutStoreActions.CurrentAreaAction({area: 'scenario'}));
  }

}
