import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenarioAreaComponent } from './containers/scenario-area/scenario-area.component';
import { ScenarioDetailsComponent } from './containers/scenario-details/scenario-details.component';
import { ScenarioSummaryComponent } from './containers/scenario-summary/scenario-summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditorModule } from 'src/app/editor/editor.module';
import { TargetModule } from '../target';
import { ScenarioCreateDialogComponent } from './containers';
import { StoreModule } from '@ngrx/store';
import  * as  reducers from './reducers';
import { LeaningPathsTabComponent } from './containers/scenario-leaning-paths-tab';
@NgModule({
  imports: [
    CommonModule,
    EditorModule,
    SharedModule,
    TargetModule,
    StoreModule.forFeature('scenario', reducers.reducer)
  ],
  declarations: [ScenarioAreaComponent, ScenarioDetailsComponent, ScenarioSummaryComponent, ScenarioCreateDialogComponent, LeaningPathsTabComponent]
})
export class ScenarioModule { }
