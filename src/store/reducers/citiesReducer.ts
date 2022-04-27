import { ICitiesState, CitiesAction } from "../../types/cities";

export const initialState: ICitiesState = {
  cities: [],
};

export const citiesReducer = (
  state = initialState,
  action: CitiesAction
): ICitiesState => {
  switch (action.type) {
    case "SET_CITIES":
      return { ...state, cities: action.payload };
    default:
      return state;
  }
};
