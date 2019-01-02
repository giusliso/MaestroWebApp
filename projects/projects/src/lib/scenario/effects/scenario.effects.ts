import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ScenarioActionTypes } from '../actions/scenario.actions';

@Injectable()
export class scenarioEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(ScenarioActionTypes.CreateScenario));

  constructor(private actions$: Actions) {}
}
