import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LearningPathActionTypes } from '../actions/learning-path.actions';

@Injectable()
export class LearningPathEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(LearningPathActionTypes.LoadLearningPaths));

  constructor(private actions$: Actions) {}
}
