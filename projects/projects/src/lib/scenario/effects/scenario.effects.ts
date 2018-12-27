import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { scenarioActionTypes } from '../actions/scenario.actions';

@Injectable()
export class scenarioEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(scenarioActionTypes.Loadscenarios));

  constructor(private actions$: Actions) {}
}
