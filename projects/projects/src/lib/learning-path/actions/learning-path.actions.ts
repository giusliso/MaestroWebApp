import { Action } from '@ngrx/store';
import { LearningPath } from '../../../api';

export enum LearningPathActionTypes {
  LoadLearningPaths = '[LearningPath] Load LearningPaths',
  CreateLearningPath = '[LearningPath] Create LearningPath',
  UpdateLearningPath = '[LearningPath] Update LearningPath',
  DeleteLearningPath = '[LearningPath] Delete LearningPath'
}

export class LoadLearningPaths implements Action {
  readonly type = LearningPathActionTypes.LoadLearningPaths;
}

export class CreateLearningPath implements Action {
  readonly type = LearningPathActionTypes.CreateLearningPath;
  constructor(public payload: { learningPath: LearningPath }) {}
}

export class UpdateLearningPath implements Action {
  readonly type = LearningPathActionTypes.UpdateLearningPath;
  constructor(public payload: { learningPath: LearningPath }) {}
}
export class DeleteLearningPath implements Action {
  readonly type = LearningPathActionTypes.DeleteLearningPath;
  constructor(public payload: { learningPath: LearningPath }) {}
}

export type LearningPathActions =
  | LoadLearningPaths
  | CreateLearningPath
  | UpdateLearningPath
  | DeleteLearningPath;
