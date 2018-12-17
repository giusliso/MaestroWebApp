import { Action } from '@ngrx/store';
import { ScenaActions, ScenaActionTypes } from '../actions/scena.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: ScenaActions): State {
  switch (action.type) {

    case ScenaActionTypes.LoadScenas:
      return state;


    default:
      return state;
  }
}
