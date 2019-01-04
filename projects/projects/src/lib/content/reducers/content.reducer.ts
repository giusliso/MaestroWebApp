import { Action } from '@ngrx/store';
import { ContentActions, ContentActionTypes } from '../actions/content.actions';
import { Content } from '../../../api';

export interface ContentState {
  content: Content[];
  error: boolean;
}

export const initialState: ContentState = {
  content: [],
  error: false
};

export function reducer(
  state = initialState,
  action: ContentActions
): ContentState {
  switch (action.type) {
    case ContentActionTypes.LoadContents:
      return state;
    case ContentActionTypes.CreateContent:
      let currentList = state.content;
      action.payload.content.contentId = state.content.length;
      currentList.push(action.payload.content);
      return {
        ...state,
        content: currentList
      };
    case ContentActionTypes.DeleteContent:
      const list = state.content;
      list.splice(state.content.indexOf(action.payload.content), 1);
      return {
        ...state,
        content: list
      };

    case ContentActionTypes.UpdateContent:
      const updatedList = state.content;
      const itemToUpdate = state.content.find(
        x => x.contentId === action.payload.content.contentId
      );
      updatedList[updatedList.indexOf(itemToUpdate)] = action.payload.content;
      return {
        ...state,
        content: updatedList
      };

    default:
      return state;
  }
}
