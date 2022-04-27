export interface ICitiesState {
  cities: string[];
}

export enum CitiesActionTypes {
  SET_CITIES = "SET_CITIES",
  FETCH_CITIES = "FETCH_CITIES",
}

interface ISetCitiesAction {
  type: CitiesActionTypes.SET_CITIES;
  payload: string[];
}
interface IFetchCitiesAction {
  type: CitiesActionTypes.FETCH_CITIES;
}

export type CitiesAction = ISetCitiesAction | IFetchCitiesAction;
