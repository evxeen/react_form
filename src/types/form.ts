export interface IFormState {
  city: string;
  university: string;
  password: string;
  passwordConfirm: string;
  email: string;
  agreement: string;
  errorPassword: string;
  errorPasswordConfirm: string;
  errorEmail: string;
}

export enum FormActionTypes {
  SET_CITY = "SET_CITY",
  SET_UNIVERSITY = "SET_UNIVERSITY",
  SET_PASSWORD = "SET_PASSWORD",
  SET_PASSWORDCONFIRM = "SET_PASSWORDCONFIRM",
  SET_EMAIL = "SET_EMAIL",
  SET_AGREEMENT = "SET_AGREEMENT",
  SET_ERROR_PASSWORD = "SET_ERROR_PASSWORD",
  SET_ERROR_PASSWORDCONFIRM = "SET_ERROR_PASSWORDCONFIRM",
  SET_ERROR_EMAIL = "SET_ERROR_EMAIL",
}

export interface ISetFormActions {
  type: string;
  payload: string;
}
