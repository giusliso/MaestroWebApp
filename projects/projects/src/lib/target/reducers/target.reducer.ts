import { Action } from '@ngrx/store';
import { TargetActions, TargetActionTypes } from '../actions/target.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: TargetActions): State {
  switch (action.type) {

    case TargetActionTypes.LoadTargets:
      return state;


    default:
      return state;
  }
}
