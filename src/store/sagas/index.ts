import { all } from "redux-saga/effects";
import { citiesWatcher } from "./getCities";
import { universitiesWatcher } from "./getUniversities";

export function* rootWatcher() {
  yield all([citiesWatcher(), universitiesWatcher()]);
}
