import { Action } from '@ngrx/store';
import { Scene } from '../../../api';

export enum SceneActionTypes {
  LoadScenes = '[Scene] Load Scenes',
  CreateScene = '[Scene] Create Scene',
  UpdateScene = '[Scene] Update Scene',
  DeleteScene = '[Scene] Delete Scene'
}

export class LoadScenes implements Action {
  readonly type = SceneActionTypes.LoadScenes;
}

export class CreateScene implements Action {
  readonly type = SceneActionTypes.CreateScene;
  constructor(public payload: { scene: Scene }) {}
}

export class UpdateScene implements Action {
  readonly type = SceneActionTypes.UpdateScene;
  constructor(public payload: { scene: Scene }) {}
}
export class DeleteScene implements Action {
  readonly type = SceneActionTypes.DeleteScene;
  constructor(public payload: { scene: Scene }) {}
}

export type SceneActions = LoadScenes | CreateScene | UpdateScene | DeleteScene;
