import { Component, OnInit, ViewChild } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { Area } from 'src/app/core';
import { PanelMenu } from 'primeng/panelmenu';
@Component({
  selector: 'app-navigation-pane',
  templateUrl: './navigation-pane.component.html',
  styleUrls: ['./navigation-pane.component.scss']
})

export class NavigationPaneComponent {
  @ViewChild('panelMenu')
  panelMenu: PanelMenu;
    items;
    selectedItem;
    constructor(
      private router: Router,
      private layoutStore: Store<LayoutState>,
      ){

    }

    onselect(event){

    }

    ngOnInit() {
      
        this.items = [
            {
              label: 'Scene',
              type: Area.Scene,
              icon: 'pi pi-fw pi-cog',
              command: (event) => { 
                this.router.navigateByUrl('scena');
              }
            },
            {
              label: 'Scenario',
              type: Area.Scenarios,
              icon: 'pi pi-fw pi-cog',
              command: (event) => { 
                this.router.navigateByUrl('scenario');
              }
            },
           {
              label: 'Learning-Paths',
              type: Area.LearningPath,
              icon: 'pi pi-fw pi-cog',
              command: (event) => { 
                this.router.navigateByUrl('learning-path');
              }
            },
            {
              label: 'Targets',
              type: Area.Target,
              icon: 'pi pi-fw pi-cog',
              command: (event) => { 
                this.router.navigateByUrl('target');
              }
            },
            {
              label: 'Contents',
              type: Area.Contents,
              icon: 'pi pi-fw pi-cog'
            }
        ];
    }
}
