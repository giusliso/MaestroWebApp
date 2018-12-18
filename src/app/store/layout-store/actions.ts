import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  DialogOpenedStatus = '[Dialog] Dialog Opened Status',
  OrganizerDataChange = '[Organizer] Data Change',
  AddItem= '[Organizer] Create',
  DeleteItem = '[Organizer] Delete',
  ItemSelect = '[Organizer] Select',
  DetailsChange = '[Details] Change',
  DetailsPersist = '[Details] Persist',
  NavigationDenied = '[Navigation] Denied',
  NavigationBack = '[Navigation] Denied Cancellation',
  CurrentArea = '[Navigation] Current Area'
}

export class DialogOpenedStatusAction implements Action {
  readonly type = LayoutActionTypes.DialogOpenedStatus;

  constructor(public payload: { opened: boolean }) {}
}

export class AddItemAction implements Action {
  readonly type = LayoutActionTypes.AddItem;

  constructor(public payload: { item: any }) {}
}
export class DeleteItemAction implements Action {
  readonly type = LayoutActionTypes.DeleteItem;

  constructor(public payload: { item: any }) {}
}

export class ItemSelectAction implements Action {
  readonly type = LayoutActionTypes.ItemSelect;

  constructor(public payload: { item: any }) {}
}

export class DetailsChangeAction implements Action {
  readonly type = LayoutActionTypes.DetailsChange;

  constructor(public payload: { item: any }) {}
}

export class DetailsPersistAction implements Action {
  readonly type = LayoutActionTypes.DetailsPersist;

  constructor(public payload: { item: any }) {}
}

export class NavigationDeniedAction implements Action {
  readonly type = LayoutActionTypes.NavigationDenied;

  constructor() {}
}
export class NavigationBackAction implements Action {
  readonly type = LayoutActionTypes.NavigationBack;
  constructor() {}
}

export class CurrentAreaAction implements Action {
  readonly type = LayoutActionTypes.CurrentArea;
  constructor(public payload: { area: any }) {}
}

export type LayoutActions =
  | DialogOpenedStatusAction
  | AddItemAction
  | DeleteItemAction
  | ItemSelectAction
  | DetailsChangeAction
  | DetailsPersistAction
  | NavigationDeniedAction
  | NavigationBackAction
  | CurrentAreaAction;
