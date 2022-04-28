import {
  IUniversitiesState,
  UniversitiesAction,
  UniversitiesActionTypes,
} from "../../types/universities";

export const initialState: IUniversitiesState = {
  universities: [],
};

export const universitiesReducer = (
  state = initialState,
  action: UniversitiesAction
) => {
  switch (action.type) {
    case UniversitiesActionTypes.SET_UNIVERSITIES:
      return { ...state, universities: action.payload };
    default:
      return state;
  }
};
