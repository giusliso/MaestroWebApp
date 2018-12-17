import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromLearningPath from './reducers/learning-path.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LearningPathEffects } from './effects/learning-path.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('learningPath', fromLearningPath.reducer),
    EffectsModule.forFeature([LearningPathEffects])
  ],
  declarations: []
})
export class LearningPathModule { }
