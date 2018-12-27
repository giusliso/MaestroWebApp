import { Action } from '@ngrx/store';

export enum ScenaActionTypes {
  LoadScenas = '[Scena] Load Scenas'
}

export class LoadScenas implements Action {
  readonly type = ScenaActionTypes.LoadScenas;
}

export type ScenaActions = LoadScenas;
