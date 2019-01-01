import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Store, select } from '@ngrx/store';
import {State as LayoutState, State} from 'src/app/store/layout-store/reducer';
import { Subscription } from 'rxjs';
import { LayoutActionTypes } from 'src/app/store/layout-store/actions';
import { Actions, ofType } from '@ngrx/effects';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  items: MenuItem[];
  subscriptions: Subscription[] = [];
  saveStatus = true;
  revertStatus = true;

  @Output()
  save = new EventEmitter();

  @Output()
  revert = new EventEmitter();

  constructor(
    private layoutStore: Store<LayoutState>,
    private update$: Actions,
    ){
      this.subscriptions.push(this.update$.pipe(ofType(LayoutActionTypes.DetailsChange))
      .subscribe(() => {
        this.saveStatus = false;
        this.revertStatus = false;
      }));
      this.subscriptions.push(this.update$.pipe(ofType(LayoutActionTypes.DetailsPersist))
      .subscribe(() => {
        this.saveStatus = true;
        this.revertStatus = true;
      }));
  }

  onSave(){
    this.save.emit()
  }

  onRevert(){
    this.revert.emit()
  }

  
  ngOnInit() {
    
  }

  ngOnDestroy(){
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}