import {
  CitiesAction,
  CitiesActionTypes,
  ICitiesState,
} from "../../types/cities";

export const initialState: ICitiesState = {
  cities: [],
};

export const citiesReducer = (
  state = initialState,
  action: CitiesAction
): ICitiesState => {
  switch (action.type) {
    case CitiesActionTypes.SET_CITIES:
      return { ...state, cities: action.payload };
    default:
      return state;
  }
};
