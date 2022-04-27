import { CitiesAction } from "../../types/cities";

export const citiesAction = (payload: CitiesAction) => ({
  type: "SET_CITIES",
  payload: payload,
});

export const fetchCities = () => ({
  type: "FETCH_CITIES",
});
