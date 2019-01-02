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
  currentScene;
  selectedLandmark;
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
  area: undefined,
  currentScene: undefined,
  selectedLandmark: undefined
};

export function reducer(state = initialState, action: LayoutActions): State {
  switch (action.type) {
    case LayoutActionTypes.ItemSelect: {
      return {
        ...state,
        organizerSelection: action.payload.item,
      };
    }
    case LayoutActionTypes.AddItem: {
      return {
        ...state
      };
    }
    case LayoutActionTypes.DeleteItem: {
      return {
        ...state
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
    case LayoutActionTypes.CurrentScene: {
      return {
        ...state,
        currentScene: action.payload.item
      };
    }
    case LayoutActionTypes.LandMarkSet: {
      return {
        ...state,
        selectedLandmark: action.payload.landmark
      };
    }
    case LayoutActionTypes.ItemSelect: {
      return {
        ...state,
        organizerSelection: action.payload.item,
      };
    }
    default: {
      return state;
    }
  }
}
