import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningPathAreaComponent } from './containers/learning-path-area/learning-path-area.component';
import { LearningPathDetailsComponent } from './containers/learning-path-details/learning-path-details.component';
import { LearningPathSummaryComponent } from './containers/learning-path-summary/learning-path-summary.component';
import { SharedModule } from 'primeng/components/common/shared';
import { EditorModule } from 'src/app/editor/editor.module';

@NgModule({
  imports: [
    CommonModule,
    EditorModule,
    SharedModule
  ],
  declarations: [LearningPathAreaComponent , LearningPathDetailsComponent, LearningPathSummaryComponent]
})
export class LearningPathModule { }
