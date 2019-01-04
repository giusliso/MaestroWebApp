import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SceneActionTypes } from '../actions/scena.actions';

@Injectable()
export class ScenaEffects {
  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(SceneActionTypes.CreateScene));

  constructor(private actions$: Actions) {}
}
