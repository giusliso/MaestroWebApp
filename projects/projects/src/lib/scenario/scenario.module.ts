import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenarioAreaComponent } from './containers/scenario-area/scenario-area.component';
import { ScenarioDetailsComponent } from './containers/scenario-details/scenario-details.component';
import { ScenarioSummaryComponent } from './containers/scenario-summary/scenario-summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditorModule } from 'src/app/editor/editor.module';
import { TargetModule } from '../target';

@NgModule({
  imports: [
    CommonModule,
    EditorModule,
    SharedModule,
    TargetModule
  ],
  declarations: [ScenarioAreaComponent, ScenarioDetailsComponent, ScenarioSummaryComponent]
})
export class ScenarioModule { }
