import { takeEvery, put, call } from "redux-saga/effects";
import { CitiesActionTypes } from "../../types/cities";
import { setCitiesAction } from "../actions/citiesAction";

const axios = require("axios").default;

const fetchCitiesFromJson = () => axios.get("cities.json");

function* workerSaga() {
  const { data } = yield call(fetchCitiesFromJson);
  const filteredCities = data
    .filter((city: any) => city.population > 50000)
    .map((city: any) => city.city);

  yield put(setCitiesAction(filteredCities));
}

function* watchClickSaga() {
  yield takeEvery(CitiesActionTypes.FETCH_CITIES, workerSaga);
}

export function* rootSaga() {
  yield watchClickSaga();
}
