import {
  StatusAction,
  StatusActionTypes,
  IStatusState,
} from "../../types/status";

const initialState: IStatusState = {
  status: "Прежде чем действовать, надо понять",
  edited: false,
};

export const statusReducer = (
  state = initialState,
  action: StatusAction
): IStatusState => {
  switch (action.type) {
    case StatusActionTypes.CHANGE_STATUS:
      return { ...state, status: action.payload };
    case StatusActionTypes.SHOW_FIELD:
      return { ...state, edited: !state.edited };
    default:
      return state;
  }
};
