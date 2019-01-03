import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningPathAreaComponent } from './containers/learning-path-area/learning-path-area.component';
import { LearningPathDetailsComponent } from './containers/learning-path-details/learning-path-details.component';
import { LearningPathSummaryComponent } from './containers/learning-path-summary/learning-path-summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditorModule } from 'src/app/editor/editor.module';
import { TargetModule } from '../target';
import { LearningPathCreateDialogComponent } from './containers/learning-path-create-dialog';
import { StoreModule } from '@ngrx/store';
import  * as  reducers from './reducers';
import { LinkTargetTabComponent } from './containers/link-target-tab';

@NgModule({
  imports: [
    CommonModule,
    EditorModule,
    SharedModule,
    TargetModule,
    StoreModule.forFeature('learning-path', reducers.reducer)
  ],
  declarations: [
    LearningPathAreaComponent , 
    LearningPathDetailsComponent, 
    LearningPathSummaryComponent, 
    LearningPathCreateDialogComponent,
    LinkTargetTabComponent]
})
export class LearningPathModule { }
