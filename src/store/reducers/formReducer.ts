import { IFormState, ISetFormActions, FormActionTypes } from "../../types/form";

const initialState: IFormState = {
  city: "",
  university: "",
  password: "",
  passwordConfirm: "",
  email: "",
  agreement: "",
  errorPassword: "",
  errorPasswordConfirm: "",
  errorEmail: "",
};

export const formReducer = (
  state = initialState,
  action: ISetFormActions
): IFormState => {
  switch (action.type) {
    case FormActionTypes.SET_CITY:
      return { ...state, city: action.payload };
    case FormActionTypes.SET_UNIVERSITY:
      return { ...state, university: action.payload };
    case FormActionTypes.SET_PASSWORD:
      return { ...state, password: action.payload };
    case FormActionTypes.SET_PASSWORDCONFIRM:
      return { ...state, passwordConfirm: action.payload };
    case FormActionTypes.SET_EMAIL:
      return { ...state, email: action.payload };
    case FormActionTypes.SET_AGREEMENT:
      return { ...state, agreement: action.payload };
    case FormActionTypes.SET_ERROR_PASSWORD:
      return { ...state, errorPassword: action.payload };
    case FormActionTypes.SET_ERROR_PASSWORDCONFIRM:
      return { ...state, errorPasswordConfirm: action.payload };
    case FormActionTypes.SET_ERROR_EMAIL:
      return { ...state, errorEmail: action.payload };
    default:
      return state;
  }
};
