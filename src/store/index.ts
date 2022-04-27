import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { statusReducer } from "./reducers/statusReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/getCities";
import { citiesReducer } from "./reducers/citiesReducer";

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
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
