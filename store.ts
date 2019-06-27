import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export const initialState = {
  count: 0,
  login: {
    loading: false,
    email: "",
    password: "",
    token: ""
  },
  error: undefined as Error | undefined
};

export type State = typeof initialState;

export type Action =
  | { type: "Increment" }
  | { type: "Decrement" }
  | { type: "Change"; newValue: number }
  | { type: "ChangeEmail"; email: string }
  | { type: "ChangePassword"; password: string }
  | { type: "LoginRequest" }
  | { type: "LoginSuccess"; token: string }
  | { type: "LoginFailed"; error: Error };

const reducer: (state: State | undefined, action: Action) => State = (
  state,
  action
) => {
  state = state || initialState;

  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "Decrement":
      return { ...state, count: state.count - 1 };
    case "Change":
      return { ...state, count: action.newValue };
    case "ChangeEmail":
      return { ...state, login: { ...state.login, email: action.email } };
    case "ChangePassword":
      return { ...state, login: { ...state.login, password: action.password } };
    case "LoginRequest":
      return { ...state, login: { ...state.login, loading: true } };
    case "LoginSuccess":
      return {
        ...state,
        login: { ...state.login, loading: false, token: action.token }
      };
    case "LoginFailed":
      return {
        ...state,
        login: { ...state.login, loading: false },
        error: action.error
      };
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));

export function withLoadingAndErrorDispatcher(
  f: (...args: any[]) => Promise<any>,
  ...args: any[]
) {
  return () => {
    store.dispatch({
      type: "LoginRequest"
    });

    f(...args).catch(error =>
      store.dispatch({
        type: "LoginFailed",
        error
      })
    );
  };
}
