import { LayoutActions, LayoutActionTypes } from './actions';

export interface State {
  dialogOpened;
  organizerSelection;
  organizerData;
  organizerProps;
  locatorSelection;
  locatorData;
  locatorProps;
  dataIsPersistent;
  area;
}

export const initialState = {
  dialogOpened: undefined,
  organizerSelection: undefined,
  organizerData: undefined,
  organizerProps: undefined,
  locatorSelection: undefined,
  locatorData: undefined,
  locatorProps: undefined,
  dataIsPersistent: true,
  area: undefined
};

export function reducer(state = initialState, action: LayoutActions): State {
  switch (action.type) {
    case LayoutActionTypes.ItemSelect: {
      return {
        ...state,
        organizerSelection: action.payload.item
      };
    }
    case LayoutActionTypes.AddItem: {
      return {
        ...state,
        organizerSelection: action.payload.item
      };
    }
    case LayoutActionTypes.DeleteItem: {
      return {
        ...state,
        organizerSelection: action.payload.item
      };
    }
    case LayoutActionTypes.DetailsChange: {
      return {
        ...state,
        dataIsPersistent: false
      };
    }
    case LayoutActionTypes.DetailsPersist: {
      return {
        ...state,
        dataIsPersistent: true
      };
    }
    case LayoutActionTypes.CurrentArea: {
      return {
        ...state,
        area: action.payload.area
      };
    }
    default: {
      return state;
    }
  }
}
