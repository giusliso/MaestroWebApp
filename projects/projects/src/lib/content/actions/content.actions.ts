import { Action } from '@ngrx/store';
import { Content } from '../../../api';


export enum ContentActionTypes {
  LoadContents = '[Content] Load Contents',
  CreateContent = '[Content] Create Content',
  UpdateContent = '[Content] Update Content',
  DeleteContent = '[Content] Delete Content'
}


export class LoadContents implements Action {
  readonly type = ContentActionTypes.LoadContents;
}

export class CreateContent implements Action {
  readonly type = ContentActionTypes.CreateContent;
  constructor( public payload: { content: Content}){}
}

export class UpdateContent implements Action {
  readonly type = ContentActionTypes.UpdateContent;
  constructor( public payload: { content: Content}){}
}
export class DeleteContent implements Action {
  readonly type = ContentActionTypes.DeleteContent;
  constructor( public payload: { content: Content}){}
}

export type ContentActions =
  LoadContents |
  CreateContent |
  UpdateContent |
  DeleteContent;
