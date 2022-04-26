import { IStatusState, StatusActionTypes } from "../../types/status";

export const changeStatusAction = (payload: string) => ({
  type: StatusActionTypes.CHANGE_STATUS,
  payload: payload,
});

export const showFieldAction = () => ({
  type: StatusActionTypes.SHOW_FIELD,
});
