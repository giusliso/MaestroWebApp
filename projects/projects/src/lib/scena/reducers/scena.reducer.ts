import { Action } from '@ngrx/store';
import { SceneActions, SceneActionTypes } from '../actions/scena.actions';
import { Scene } from '../../../api';

export interface SceneState {
  scene: Scene[],
  error:boolean
}

export const initialState: SceneState = {
  scene : [],
  error : false

};

export function reducer(state = initialState, action: SceneActions): SceneState {

  switch (action.type) {
    case SceneActionTypes.LoadScenes:
      return state;
    case SceneActionTypes.CreateScene:
      let currentList = state.scene;
      action.payload.scene.name = "New Scene " + state.scene.length;
      action.payload.scene.sceneId = state.scene.length;
      currentList.push(action.payload.scene);
      return {
        ...state,
        scene : currentList
      };
    case SceneActionTypes.DeleteScene:  
      const list = state.scene;
      list.splice(state.scene.indexOf(action.payload.scene),1);
      return {
        ...state,
        scene : list
      }

    default:
      return state;
  }
}
