import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TargetActionTypes } from '../actions/target.actions';

@Injectable()
export class TargetEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(TargetActionTypes.LoadTargets));

  constructor(private actions$: Actions) {}
}
