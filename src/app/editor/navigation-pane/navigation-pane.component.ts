import { Component, OnInit, ViewChild } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { Area } from 'src/app/core';
import { PanelMenu } from 'primeng/panelmenu';
import { Listbox } from 'primeng/listbox';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-navigation-pane',
  templateUrl: './navigation-pane.component.html',
  styleUrls: ['./navigation-pane.component.scss']
})

export class NavigationPaneComponent {
  @ViewChild('panelMenu')
  panelMenu: Listbox;
  items;
  selectedItem;
    constructor(
      private router: Router,
      private layoutStore: Store<LayoutState>,
      ){
 
    }

    select(event){
      switch(event.type){
        case Area.Scene:
          this.router.navigateByUrl('scena');
        break;
        case Area.Scenarios:
          this.router.navigateByUrl('scenario');
        break;
        case Area.LearningPath:
          this.router.navigateByUrl('learning-path'); 
        break;
        case Area.Target:
          this.router.navigateByUrl('target');
        break;
      }
    }

    ngOnInit() {
      
        this.items = [
            {
              label: 'Scene',
              type: Area.Scene,
            },
            {
              label: 'Scenario',
              type: Area.Scenarios,
            },
           {
              label: 'Learning-Paths',
              type: Area.LearningPath,

            },
            {
              label: 'Targets',
              type: Area.Target,

            },
            {
              label: 'Contents',
              type: Area.Contents
            }
        ];
        this.layoutStore.pipe(first(), select('layout', 'area'))
          .subscribe(area => {   
            console.log(area);
            this.selectedItem = this.items.find(x => x.type === area);
          })
    }
}
