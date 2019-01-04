import { Action } from '@ngrx/store';
import { TargetActions, TargetActionTypes } from '../actions/target.actions';
import { Target } from '../../../api';

export interface TargetState {
  targets: Target[];
  error: boolean;
}

export const initialState: TargetState = {
  targets: [],
  error: false
};

export function reducer(
  state = initialState,
  action: TargetActions
): TargetState {
  switch (action.type) {
    case TargetActionTypes.LoadTargets:
      return state;
    case TargetActionTypes.CreateTarget:
      let currentList = state.targets;
      action.payload.target.name = 'New Target ' + state.targets.length;
      action.payload.target.targetId = state.targets.length;
      currentList.push(action.payload.target);
      return {
        ...state,
        targets: currentList
      };

    case TargetActionTypes.UpdateTarget:
      const updatedList = state.targets;
      const itemToUpdate = state.targets.find(
        x => x.targetId === action.payload.target.targetId
      );
      updatedList[updatedList.indexOf(itemToUpdate)] = action.payload.target;
      return {
        ...state,
        targets: updatedList
      };
    case TargetActionTypes.DeleteTarget:
      const list = state.targets;
      list.splice(state.targets.indexOf(action.payload.target), 1);
      return {
        ...state,
        targets: list
      };

    default:
      return state;
  }
}
