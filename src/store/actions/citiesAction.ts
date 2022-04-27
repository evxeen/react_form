import { CitiesAction, CitiesActionTypes } from "../../types/cities";

export const setCitiesAction = (payload: CitiesAction) => ({
  type: CitiesActionTypes.SET_CITIES,
  payload: payload,
});

export const fetchCities = () => ({
  type: CitiesActionTypes.FETCH_CITIES,
});
