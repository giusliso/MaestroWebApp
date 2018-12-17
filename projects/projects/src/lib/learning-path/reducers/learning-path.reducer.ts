import { Action } from '@ngrx/store';
import { LearningPathActions, LearningPathActionTypes } from '../actions/learning-path.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: LearningPathActions): State {
  switch (action.type) {

    case LearningPathActionTypes.LoadLearningPaths:
      return state;


    default:
      return state;
  }
}
