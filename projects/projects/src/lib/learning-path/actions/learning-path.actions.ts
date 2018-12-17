import { Action } from '@ngrx/store';

export enum LearningPathActionTypes {
  LoadLearningPaths = '[LearningPath] Load LearningPaths'
}

export class LoadLearningPaths implements Action {
  readonly type = LearningPathActionTypes.LoadLearningPaths;
}

export type LearningPathActions = LoadLearningPaths;