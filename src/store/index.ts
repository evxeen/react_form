import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { statusReducer } from "./reducers/statusReducer";
import createSagaMiddleware from "redux-saga";
import { citiesReducer } from "./reducers/citiesReducer";
import { universitiesReducer } from "./reducers/universitiesReducer";
import { rootWatcher } from "./sagas";
import { formReducer } from "./reducers/formReducer";

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  status: statusReducer,
  cities: citiesReducer,
  universities: universitiesReducer,
  form: formReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
