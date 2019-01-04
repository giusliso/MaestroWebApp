import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Scenario, LearningPath, Content, Target } from '../../../../api';
import { Store, select } from '@ngrx/store';
import { State as LayoutState } from 'src/app/store/layout-store/reducer';
import { DetailsChangeAction } from 'src/app/store/layout-store/actions';
import { Subscription } from 'rxjs';
import { Dialog } from 'primeng/dialog';
import { ContentState } from '../../../content';
import { PickList } from 'primeng/picklist';
@Component({
  selector: 'lib-link-content-tab',
  templateUrl: './link-content-tab.component.html',
  styleUrls: ['./link-content-tab.component.css']
})
export class LinkContentTabComponent implements OnInit {
  availables: Content[];

  currentLinked: Content[];

  pickListVisible: boolean;

  constructor(
    private contentStore: Store<ContentState>,
    private layoutStore: Store<LayoutState>
  ) {}

  ngOnInit() {}

  onChange() {
    this.layoutStore.dispatch(new DetailsChangeAction({ item: null }));
  }

  fillTables(target: Target) {
    if (target === undefined) {
      this.availables = [];
      this.currentLinked = [];
      return;
    }
    this.contentStore
      .pipe(select('content', 'content'))
      .subscribe((content: Content[]) => {
        this.currentLinked = target.contents;
        this.availables = content.filter(
          x => this.currentLinked.indexOf(x) === -1
        );
        this.currentLinked = [...this.currentLinked];
        this.availables = [...this.availables];
      });
  }

  getList(): LearningPath[] {
    return this.currentLinked;
  }
}
