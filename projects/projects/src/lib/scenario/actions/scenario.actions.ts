import { Action } from '@ngrx/store';

export enum scenarioActionTypes {
  Loadscenarios = '[scenario] Load scenarios'
}

export class Loadscenarios implements Action {
  readonly type = scenarioActionTypes.Loadscenarios;
}

export type scenarioActions = Loadscenarios;
