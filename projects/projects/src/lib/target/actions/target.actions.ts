import { Action } from '@ngrx/store';

export enum TargetActionTypes {
  LoadTargets = '[Target] Load Targets'
}

export class LoadTargets implements Action {
  readonly type = TargetActionTypes.LoadTargets;
}

export type TargetActions = LoadTargets;
