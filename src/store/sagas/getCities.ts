import { takeEvery, put, call } from "redux-saga/effects";
import { CitiesActionTypes } from "../../types/cities";
import { setCitiesAction } from "../actions/citiesAction";

const axios = require("axios").default;

const fetchCitiesFromJson = () => axios.get("cities.json");

function* citiesWorker() {
  const { data } = yield call(fetchCitiesFromJson);

  const sortedCities = data
    .filter((city: any) => city.population > 50000)
    .sort((a: any, b: any) => (a.city > b.city ? 1 : -1));

  const largestPopulation = sortedCities.reduce((acc: any, curr: any) =>
    +acc.population > +curr.population ? acc : curr
  );

  const finalArray: any = Array.from(
    new Set([largestPopulation, ...sortedCities])
  ).map((city: any) => city.city);

  yield put(setCitiesAction(finalArray));
}

export function* citiesWatcher() {
  yield takeEvery(CitiesActionTypes.FETCH_CITIES, citiesWorker);
}
