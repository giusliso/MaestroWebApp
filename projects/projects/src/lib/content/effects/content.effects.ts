import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ContentActionTypes } from '../actions/content.actions';

@Injectable()
export class ContentEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(ContentActionTypes.CreateContent));

  constructor(private actions$: Actions) {}
}
