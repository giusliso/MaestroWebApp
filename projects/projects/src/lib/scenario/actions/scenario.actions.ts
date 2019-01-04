import { Action } from '@ngrx/store';
import { Scenario } from '../../../api';


export enum ScenarioActionTypes {
  LoadScenarios = '[Scenario] Load Scenarios',
  CreateScenario = '[Scenario] Create Scenario',
  UpdateScenario = '[Scenario] Update Scenario',
  DeleteScenario = '[Scenario] Delete Scenario'
}


export class LoadScenarios implements Action {
  readonly type = ScenarioActionTypes.LoadScenarios;
}

export class CreateScenario implements Action {
  readonly type = ScenarioActionTypes.CreateScenario;
  constructor( public payload: { scenario: Scenario}){}
}

export class UpdateScenario implements Action {
  readonly type = ScenarioActionTypes.UpdateScenario;
  constructor( public payload: { scenario: Scenario}){}
}
export class DeleteScenario implements Action {
  readonly type = ScenarioActionTypes.DeleteScenario;
  constructor( public payload: { scenario: Scenario}){}
}

export type ScenarioActions =
  LoadScenarios |
  CreateScenario |
  UpdateScenario |
  DeleteScenario;
