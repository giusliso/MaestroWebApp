import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAreaComponent } from './containers/content-area/content-area.component';
import { ContentDetailsComponent } from './containers/content-details/content-details.component';
import { ContentSummaryComponent } from './containers/content-summary/content-summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditorModule } from 'src/app/editor/editor.module';
import { TargetModule } from '../target';
import { ContentCreateDialogComponent } from './containers';
import { StoreModule } from '@ngrx/store';
import  * as  reducers from './reducers';

@NgModule({
  imports: [
    CommonModule,
    EditorModule,
    SharedModule,
    TargetModule,
    StoreModule.forFeature('content', reducers.reducer)
  ],
  declarations: [
    ContentAreaComponent, 
    ContentDetailsComponent, 
    ContentSummaryComponent, 
    ContentCreateDialogComponent
  ]
})
export class ContentModule { }
