import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentSummaryComponent } from '../content-summary';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { DetailsChangeAction } from 'src/app/store/layout-store/actions';
import { Content } from '../../../../api';
import { ContentState } from '../../reducers';
import { UpdateContent } from '../../actions';

@Component({
  selector: 'lib-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailsComponent implements OnInit {
  @ViewChild('summaryTab')
  summaryTab: ContentSummaryComponent;

  private currentItem: Content;

  constructor(
    private layoutState: Store<LayoutState>,
    private ContentState: Store<ContentState>
  ) {
    
 
  }


  save() {
    let updatedContent = this.summaryTab.getSummary();
    if(updatedContent !== null) {

      this.ContentState.dispatch(new UpdateContent({content: updatedContent}));
    }
  }

  revert () {
    this.summaryTab.fillSummary(this.currentItem);
  }

  updateChilds(content){
    this.currentItem = content;
    this.summaryTab.fillSummary(content);
  }

  ngOnInit() {
  
  }

  ngOnDestroy(){

  }

}
