import { Action } from '@ngrx/store';
import { scenarioActions, scenarioActionTypes } from '../actions/scenario.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: scenarioActions): State {
  switch (action.type) {

    case scenarioActionTypes.Loadscenarios:
      return state;


    default:
      return state;
  }
}
