import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenaAreaComponent } from './containers/scena-area/scena-area.component';
import { ScenaDetailsComponent } from './containers/scena-details/scena-details.component';
import { ScenaSummaryComponent } from './containers/scena-summary/scena-summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditorModule } from 'src/app/editor/editor.module';
import { TargetModule } from '../target';
import { StoreModule } from '@ngrx/store';
import  * as  reducers from './reducers';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EditorModule,
    TargetModule,
    StoreModule.forFeature('scene', reducers.reducer)
  ],
  declarations: [ScenaAreaComponent, ScenaDetailsComponent, ScenaSummaryComponent]
})
export class ScenaModule { }
