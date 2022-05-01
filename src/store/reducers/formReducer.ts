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

export const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_UNIVERSITY":
      return { ...state, university: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_PASSWORDCONFIRM":
      return { ...state, passwordConfirm: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_AGREEMENT":
      return { ...state, agreement: action.payload };
    case "SET_ERROR_PASSWORD":
      return { ...state, errorPassword: action.payload };
    case "SET_ERROR_PASSWORDCONFIRM":
      return { ...state, errorPasswordConfirm: action.payload };
    case "SET_ERROR_EMAIL":
      return { ...state, errorEmail: action.payload };
    default:
      return state;
  }
};
