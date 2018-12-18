import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TargetAreaComponent } from './containers/target-area/target-area.component';
import { TargetDetailsComponent } from './containers/target-details/target-details.component';
import  * as  reducers from './reducers';
import { EditorModule } from 'src/app/editor/editor.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkingAreaComponent } from './containers/working-area/working-area.component';

@NgModule({
  declarations: [TargetAreaComponent, TargetDetailsComponent, WorkingAreaComponent],
  imports: [CommonModule, StoreModule.forFeature('target', reducers.reducer), EditorModule, SharedModule]
})
export class TargetModule {}
