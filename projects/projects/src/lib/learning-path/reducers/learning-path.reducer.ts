import { Action } from '@ngrx/store';
import {
  LearningPathActions,
  LearningPathActionTypes
} from '../actions/learning-path.actions';
import { LearningPath } from '../../../api';

export interface LearningPathState {
  learningPath: LearningPath[];
  error: boolean;
}

export const initialState: LearningPathState = {
  learningPath: [],
  error: false
};

export function reducer(
  state = initialState,
  action: LearningPathActions
): LearningPathState {
  switch (action.type) {
    case LearningPathActionTypes.LoadLearningPaths:
      return state;
    case LearningPathActionTypes.CreateLearningPath:
      let currentList = state.learningPath;
      action.payload.learningPath.learningPathId = state.learningPath.length;
      currentList.push(action.payload.learningPath);
      return {
        ...state,
        learningPath: currentList
      };
    case LearningPathActionTypes.DeleteLearningPath:
      const list = state.learningPath;
      list.splice(state.learningPath.indexOf(action.payload.learningPath), 1);
      return {
        ...state,
        learningPath: list
      };

    case LearningPathActionTypes.UpdateLearningPath:
      const updatedList = state.learningPath;
      const itemToUpdate = state.learningPath.find(
        x => x.learningPathId === action.payload.learningPath.learningPathId
      );
      updatedList[updatedList.indexOf(itemToUpdate)] =
        action.payload.learningPath;
      return {
        ...state,
        learningPath: updatedList
      };

    default:
      return state;
  }
}
