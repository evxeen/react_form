import { takeEvery, put, call } from "redux-saga/effects";

const axios = require("axios").default;

const fetchCitiesFromJson = () => axios.get("cities.json");

function* workerSaga() {
  const { data } = yield call(fetchCitiesFromJson);
  const filteredCities = data
    .filter((city: any) => city.population > 50000)
    .map((city: any) => city.city);
  console.log(filteredCities);

  yield put({ type: "SET_CITIES", payload: filteredCities });
}

function* watchClickSaga() {
  yield takeEvery("FETCH_CITIES", workerSaga);
}

export function* rootSaga() {
  yield watchClickSaga();
}
