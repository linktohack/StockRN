import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { loginState, LoginAction, loginReducer } from "./components/Login";
import {
  counterReducer,
  counterState,
  CounterAction
} from "./components/Counter";

export const initialState = {
  counter: counterState,
  login: loginState,
  loading: false as string | boolean,
  error: null as Error | null
};

export type State = typeof initialState;

export type LoadingAction =
  | { type: "LoadingStart"; message: string | undefined }
  | { type: "LoadingEnd" };

export const loadingReducer: (
  state: string | boolean | undefined,
  action: LoadingAction
) => string | boolean = (state, action) => {
  state = state || false;

  switch (action.type) {
    case "LoadingStart":
      return action.message || true;
    case "LoadingEnd":
      return false;
    default:
      assertNever(action);
      return state;
  }
};

export type ErrorAction =
  | { type: "ErrorSet"; error: Error }
  | { type: "ErrorRemove" };

export const errorReducer: (
  state: Error | null | undefined,
  action: ErrorAction
) => Error | null = (state, action) => {
  state = state || null;

  switch (action.type) {
    case "ErrorSet":
      return action.error;
    case "ErrorRemove":
      return null;
    default:
      assertNever(action);
      return state;
  }
};

export type Action = CounterAction | LoginAction | LoadingAction | ErrorAction;

const reducer = combineReducers<State>({
  counter: counterReducer,
  login: loginReducer,
  loading: loadingReducer,
  error: errorReducer
});

export const store = createStore<State, Action, {}, {}>(
  reducer,
  initialState,
  applyMiddleware(thunk)
);

export type DispatchConnect = {
  dispatch: (action: Action) => void;
};

export function withLoadingAndErrorDispatcher(
  f: (...args: any[]) => Promise<any>,
  ...args: any[] // or pass message here
) {
  return () => {
    store.dispatch({
      type: "LoadingStart",
      message: undefined // or pass message here
    });

    f(...args)
      .then(success => {
        store.dispatch({
          type: "LoadingEnd",
          loading: false
        });
        return success;
      })
      .catch((_error: Response) => {
        store.dispatch({
          type: "LoadingEnd",
          loading: false
        });
        store.dispatch({
          type: "ErrorSet",
          error: new Error("custom eror here")
        });
      });
  };
}

export function assertNever(_: never) {}
