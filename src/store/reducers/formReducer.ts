export interface IFormState {
  city: string;
  university: string;
  password: string;
  passwordConfirm: string;
  email: string;
  agreement: string;
  minLength: number;
  matching: boolean;
  valid: boolean;
}

const initialState: IFormState = {
  city: "",
  university: "",
  password: "",
  passwordConfirm: "",
  email: "",
  agreement: "",
  minLength: 5,
  matching: false,
  valid: false,
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
    case "SET_VALID":
      return { ...state, valid: true };
    default:
      return state;
  }
};
