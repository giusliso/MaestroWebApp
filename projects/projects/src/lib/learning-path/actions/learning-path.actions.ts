import { Action } from '@ngrx/store';

export enum LearningPathActionTypes {
  LoadLearningPaths = '[learning-path] Load learning-paths'
}

export class LoadLearningPaths implements Action {
  readonly type = LearningPathActionTypes.LoadLearningPaths;
}

export type LearningPathActions = LoadLearningPaths;
