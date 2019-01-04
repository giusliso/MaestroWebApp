import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State as LayoutState } from 'src/app/store/layout-store/reducer';
import { Area } from 'src/app/core';
import { PanelMenu } from 'primeng/panelmenu';
import { Listbox } from 'primeng/listbox';
import { first } from 'rxjs/operators';
import { EditorService } from '../services/editor.service';
import { Actions, ofType } from '@ngrx/effects';
import { LayoutActionTypes } from 'src/app/store/layout-store/actions';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-navigation-pane',
  templateUrl: './navigation-pane.component.html',
  styleUrls: ['./navigation-pane.component.scss']
})
export class NavigationPaneComponent {
  @ViewChild('panelMenu')
  panelMenu: Listbox;
  @ViewChild('panelMenu', { read: NgModel })
  model: NgModel;

  items;
  selectedItem;
  previoustItemSelected;
  constructor(
    private router: Router,
    private layoutStore: Store<LayoutState>,
    private editor$: EditorService,
    private update$: Actions
  ) {}

  select(event) {
    let url;
    switch (event.value.type) {
      case Area.Scene:
        url = 'scena';
        break;
      case Area.Scenarios:
        url = 'scenario';
        break;
      case Area.LearningPath:
        url = 'learning-path';
        break;
      case Area.Target:
        url = 'target';
        break;
      case Area.Contents:
        url = 'content';
        break;
    }
    if (!this.editor$.tryNavigate(() => this.router.navigateByUrl(url))) {
      this.model.control.setValue(this.previoustItemSelected);
    }
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Scene',
        value: { type: Area.Scene }
      },
      {
        label: 'Scenario',
        value: { type: Area.Scenarios }
      },
      {
        label: 'Learning-Paths',
        value: { type: Area.LearningPath }
      },
      {
        label: 'Targets',
        value: { type: Area.Target }
      },
      {
        label: 'Contents',
        value: { type: Area.Contents }
      }
    ];
    this.layoutStore
      .pipe(
        first(),
        select('layout', 'area')
      )
      .subscribe(area => {
        this.selectedItem = this.items.find(x => x.value.type === area);
        this.previoustItemSelected = this.selectedItem;
      });
    this.update$
      .pipe(select(LayoutActionTypes.NavigationDenied))
      .subscribe(() => {});
  }
}
