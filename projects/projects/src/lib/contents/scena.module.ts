import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenaAreaComponent } from './containers/scena-area/scena-area.component';
import { ScenaDetailsComponent } from './containers/scena-details/scena-details.component';
import { ScenaSummaryComponent } from './containers/scena-summary/scena-summary.component';
import { SharedModule } from 'primeng/components/common/shared';
import { EditorModule } from 'src/app/editor/editor.module';

@NgModule({
  imports: [
    CommonModule,
    EditorModule,
    SharedModule
  ],
  declarations: [ScenaAreaComponent, ScenaDetailsComponent, ScenaSummaryComponent]
})
export class ScenaModule { }
