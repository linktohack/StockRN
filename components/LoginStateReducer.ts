import { Reducer } from "redux";
import { assertNever } from "../utils";

export const loginState = {
  email: "",
  password: "",
  token: ""
};

export type LoginState = typeof loginState;

export type LoginAction =
  | { type: "LoginChangeEmail"; email: string }
  | { type: "LoginChangePassword"; password: string }
  | { type: "LoginSuccess"; token: string }
  | { type: "LoginFailed"; error: Error };

export const loginReducer: Reducer<LoginState, LoginAction> = (
  state = loginState,
  action
) => {
  switch (action.type) {
    case "LoginChangeEmail":
      return { ...state, email: action.email };
    case "LoginChangePassword":
      return { ...state, password: action.password };
    case "LoginSuccess":
      return { ...state, loading: false, token: action.token };
    case "LoginFailed":
      return { ...state, loading: false, error: action.error };
    default:
      assertNever(action);
      return state;
  }
};
