import { Component, OnInit, ViewChild } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { Area } from 'src/app/core';
import { PanelMenu } from 'primeng/panelmenu';
import { Listbox } from 'primeng/listbox';
import { first } from 'rxjs/operators';
import { EditorService } from '../services/editor.service';
import { Actions, ofType } from '@ngrx/effects';
import { LayoutActionTypes } from 'src/app/store/layout-store/actions';
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
  previoustItemSelected;
    constructor(
      private router: Router,
      private layoutStore: Store<LayoutState>,
      private editor$: EditorService,
      private update$: Actions,
      ){
 
    }

    select(event){
      this.selectedItem = null;
      switch(event.value.type){
        case Area.Scene:
          this.editor$.tryNavigate(() => this.router.navigateByUrl('scena'));
        break;
        case Area.Scenarios:
           this.editor$.tryNavigate(() => this.router.navigateByUrl('scenario'));
        break;
        case Area.LearningPath:
           this.editor$.tryNavigate(() => this.router.navigateByUrl('learning-path')); 
        break;
        case Area.Target:
           this.editor$.tryNavigate(() => this.router.navigateByUrl('target'));
        break;
      }
    }

    ngOnInit() {
      
        this.items = [
            {
              label: 'Scene',
              value : {type: Area.Scene}
            },
            {
              label: 'Scenario',
              value : {type: Area.Scenarios}
            },
           {
              label: 'Learning-Paths',
              value : {type: Area.LearningPath}

            },
            {
              label: 'Targets',
              value : {type: Area.Target}
            },
            {
              label: 'Contents',
              value: {type: Area.Contents}
            }
        ];
        this.layoutStore.pipe(first(), select('layout', 'area'))
          .subscribe(area => {   
            this.selectedItem = this.items.find(x => x.value.type === area);
            this.previoustItemSelected = this.selectedItem;
          });
        this.update$.pipe(select(LayoutActionTypes.NavigationDenied))
          .subscribe( () => {
            this.selectedItem = null;
          });
    }
}
