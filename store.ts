import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { loginState, LoginAction, loginReducer } from "./components/Login";
import {
  counterReducer,
  counterState,
  CounterAction
} from "./components/Counter";
import {
  NavigationScreenProp,
  NavigationContainerComponent,
  NavigationActions
} from "react-navigation";

let navigatorRef: NavigationContainerComponent;
export function setTopLevelNavigator(ref: NavigationContainerComponent) {
  navigatorRef = ref;
}

export const initialState = {
  counter: counterState,
  login: loginState,
  loading: false as string | boolean,
  error: null as Error | null
};

export type State = typeof initialState;

export type RootAction =
  | { type: "LoadingStart"; message: string | undefined }
  | { type: "LoadingEnd" }
  | { type: "Error"; error: Error }
  | { type: "NavigateToCounter"; count: number }
  | { type: "NavigateToLogin"; email: string; password?: string };

export type Action = CounterAction | LoginAction | RootAction;

const combinedReducers = combineReducers<any>({
  counter: counterReducer,
  login: loginReducer
});

export const reducer: (
  state: State | undefined,
  action: RootAction
) => State = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case "LoadingStart":
      return { ...state, loading: action.message || true };
    case "LoadingEnd":
      return { ...state, loading: false };
    case "Error":
      return { ...state, error: action.error || null };
    case "NavigateToCounter":
      navigatorRef.dispatch(
        NavigationActions.navigate({
          routeName: "Counter"
        })
      );
      return { ...state, counter: { count: action.count } };
    case "NavigateToLogin":
      navigatorRef.dispatch(
        NavigationActions.navigate({
          routeName: "Login"
        })
      );
      return {
        ...state,
        login: {
          ...state.login,
          email: action.email,
          password: action.password
        }
      };
    default:
      assertNever(action);
      return combinedReducers(
        { counter: state.counter, login: state.login },
        action
      );
  }
};

export const store = createStore<State, Action, {}, {}>(
  reducer as any,
  initialState,
  applyMiddleware(thunk)
);

export type ConnectedProp = {
  dispatch: (action: Action) => void;
  navigation: NavigationScreenProp<{}, {}>;
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
          type: "Error",
          error: new Error("custom eror here")
        });
      });
  };
}

export function assertNever(_: never) {}
