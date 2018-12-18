import { Action } from '@ngrx/store';
import { Target } from 'src/app/models';

export enum TargetActionTypes {
  LoadTargets = '[Target] Load Targets',
  CreateTarget = '[Target] Create Target',
  DeleteTarget = '[Target] Delete Target'
}


export class LoadTargets implements Action {
  readonly type = TargetActionTypes.LoadTargets;
}

export class CreateTarget implements Action {
  readonly type = TargetActionTypes.CreateTarget;
  constructor( public payload: { target: Target}){}
}

export class DeleteTarget implements Action {
  readonly type = TargetActionTypes.DeleteTarget;
}

export type TargetActions =
  LoadTargets |
  CreateTarget |
  DeleteTarget;
