import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ScenaActionTypes } from '../actions/scena.actions';

@Injectable()
export class ScenaEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(ScenaActionTypes.LoadScenas));

  constructor(private actions$: Actions) {}
}
