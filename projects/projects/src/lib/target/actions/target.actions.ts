import { Action } from '@ngrx/store';
import { Target } from '../../../api';


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
  constructor( public payload: { target: Target}){}
}

export type TargetActions =
  LoadTargets |
  CreateTarget |
  DeleteTarget;
