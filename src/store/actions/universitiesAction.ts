import {
  UniversitiesAction,
  UniversitiesActionTypes,
} from "../../types/universities";

export const setUniversitiesAction = (payload: UniversitiesAction) => ({
  type: UniversitiesActionTypes.SET_UNIVERSITIES,
  payload: payload,
});

export const fetchUniversities = () => ({
  type: UniversitiesActionTypes.FETCH_UNIVERSITIES,
});
