import { Action } from '@ngrx/store';
import { ScenarioActions, ScenarioActionTypes } from '../actions/scenario.actions';
import { Scenario } from '../../../api';

export interface ScenarioState {
  scenario: Scenario[],
  error:boolean
}

export const initialState: ScenarioState = {
  scenario : [],
  error : false

};

export function reducer(state = initialState, action: ScenarioActions): ScenarioState {

  switch (action.type) {
    case ScenarioActionTypes.LoadScenarios:
      return state;
    case ScenarioActionTypes.CreateScenario:
      let currentList = state.scenario;
      action.payload.scenario.scenarioId = state.scenario.length;
      currentList.push(action.payload.scenario);
      return {
        ...state,
        scenario : currentList
      };
    case ScenarioActionTypes.DeleteScenario:  
      const list = state.scenario;
      list.splice(state.scenario.indexOf(action.payload.scenario),1);
      return {
        ...state,
        scenario : list
      }

    case ScenarioActionTypes.UpdateScenario:  
    const updatedList = state.scenario;
    const itemToUpdate = state.scenario.find( x => x.scenarioId === action.payload.scenario.scenarioId);
    updatedList[updatedList.indexOf(itemToUpdate)] = action.payload.scenario;
    return {
      ...state,
      scenario : updatedList
    }

    default:
      return state;
  }
}
