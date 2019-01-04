import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State as LayoutState } from 'src/app/store/layout-store/reducer';
import { DetailsChangeAction } from 'src/app/store/layout-store/actions';
import { Target } from '../../../../api';
import { TargetState } from '../../reducers';
import { TargetSummaryComponent } from '../target-summary';
import { UpdateTarget } from '../../actions';
import { LinkContentTabComponent } from '../link-content-tab';

@Component({
  selector: 'lib-target-details',
  templateUrl: './target-details.component.html',
  styleUrls: ['./target-details.component.scss']
})
export class TargetDetailsComponent implements OnInit {
  @ViewChild('summaryTab')
  summaryTab: TargetSummaryComponent;

  @ViewChild('contentTab')
  contentTab: LinkContentTabComponent;

  private currentItem: Target;

  constructor(
    private layoutState: Store<LayoutState>,
    private targetState: Store<TargetState>
  ) {}

  save() {
    const updatedTarget = this.summaryTab.getSummary();
    if (updatedTarget !== null) {
      updatedTarget.contents = this.contentTab.getList();
      this.targetState.dispatch(
        new UpdateTarget({ target: this.summaryTab.getSummary() })
      );
    }
  }

  revert() {
    this.summaryTab.fillSummary(this.currentItem);
    this.contentTab.fillTables(this.currentItem);
  }

  updateChilds(target) {
    this.currentItem = target;
    this.summaryTab.fillSummary(target);
    this.contentTab.fillTables(target);
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
