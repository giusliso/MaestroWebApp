import { Action } from '@ngrx/store';
import { TargetActions, TargetActionTypes } from '../actions/target.actions';
import { Target } from 'src/app/models';

export interface TargetState {
  targets: Target[],
  error:boolean
}

export const initialState: TargetState = {
  targets : [],
  error : false

};

export function reducer(state = initialState, action: TargetActions): TargetState {
  switch (action.type) {

    case TargetActionTypes.LoadTargets:
      return state;
    case TargetActionTypes.CreateTarget:
      const currentList = state.targets;
      action.payload.target.name = "New Target " + state.targets.length;
      currentList.push(action.payload.target);
      return {
        ...state,
        targets : currentList
      };
    case TargetActionTypes.DeleteTarget:
      return state;

    default:
      return state;
  }
}
