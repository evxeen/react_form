export interface IStatusState {
  status: string;
  edited: boolean;
}

export enum StatusActionTypes {
  CHANGE_STATUS = "CHANGE_STATUS",
  SHOW_FIELD = "SHOW_FIELD",
}

interface IChangeStatusAction {
  type: StatusActionTypes.CHANGE_STATUS;
  payload: string;
}

interface IShowFieldStatusAction {
  type: StatusActionTypes.SHOW_FIELD;
}

export type StatusAction = IChangeStatusAction | IShowFieldStatusAction;
