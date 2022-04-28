export interface IUniversitiesState {
  universities: string[];
}

export enum UniversitiesActionTypes {
  SET_UNIVERSITIES = "SET_UNIVERSITIES",
  FETCH_UNIVERSITIES = "FETCH_UNIVERSITIES",
}

interface ISetUniversitiesAction {
  type: UniversitiesActionTypes.SET_UNIVERSITIES;
  payload: string[];
}
interface IFetchUniversitiesAction {
  type: UniversitiesActionTypes.FETCH_UNIVERSITIES;
}

export type UniversitiesAction =
  | ISetUniversitiesAction
  | IFetchUniversitiesAction;
