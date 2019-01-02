import { Action } from '@ngrx/store';
import { ScenarioActions, ScenarioActionTypes } from '../actions/scenario.actions';
import { Scenario } from '../../../api';

export interface ScenarioState {
  Scenario: Scenario[],
  error:boolean
}

export const initialState: ScenarioState = {
  Scenario : [],
  error : false

};

export function reducer(state = initialState, action: ScenarioActions): ScenarioState {

  switch (action.type) {
    case ScenarioActionTypes.LoadScenarios:
      return state;
    case ScenarioActionTypes.CreateScenario:
      let currentList = state.Scenario;
      action.payload.Scenario.scenarioId = state.Scenario.length;
      currentList.push(action.payload.Scenario);
      return {
        ...state,
        Scenario : currentList
      };
    case ScenarioActionTypes.DeleteScenario:  
      const list = state.Scenario;
      list.splice(state.Scenario.indexOf(action.payload.Scenario),1);
      return {
        ...state,
        Scenario : list
      }

    case ScenarioActionTypes.UpdateScenario:  
    const updatedList = state.Scenario;
    const itemToUpdate = state.Scenario.find( x => x.scenarioId === action.payload.Scenario.scenarioId);
    updatedList[updatedList.indexOf(itemToUpdate)] = action.payload.Scenario;
    return {
      ...state,
      Scenario : updatedList
    }

    default:
      return state;
  }
}
