import { Component, OnInit } from '@angular/core';
import { LayoutStoreModule, LayoutStoreActions } from 'src/app/store/layout-store';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';

import { Actions, ofType } from '@ngrx/effects';
import { Area } from 'src/app/core';
@Component({
  selector: 'lib-learning-path-area',
  templateUrl: './learning-path-area.component.html',
  styleUrls: ['./learning-path-area.component.scss']
})
export class LearningPathAreaComponent  implements OnInit {
   public organizerProps = [];
   public menuProps =  
   [  
    {label: 'File',
     items:[
        { 
          label: 'New Learning-Path', 
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
    this.layoutStore.dispatch(new LayoutStoreActions.CurrentAreaAction({area: Area.LearningPath}));
  }

}
