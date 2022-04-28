import { takeEvery, put, call } from "redux-saga/effects";
import { setUniversitiesAction } from "../actions/universitiesAction";
import { UniversitiesActionTypes } from "../../types/universities";

const axios = require("axios").default;

const fetchUniversitiesFromJson = () =>
  axios.get("http://universities.hipolabs.com/search?country=United+Kingdom");

function* universitiesWorker() {
  const { data } = yield call(fetchUniversitiesFromJson);

  const arrayUniversities = data.map((universities: any) => universities.name);

  yield put(setUniversitiesAction(arrayUniversities));
}

export function* universitiesWatcher() {
  yield takeEvery(
    UniversitiesActionTypes.FETCH_UNIVERSITIES,
    universitiesWorker
  );
}
