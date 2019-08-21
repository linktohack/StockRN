import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import thunk from "redux-thunk";
import {
  NavigationActions,
  NavigationContainerComponent,
  NavigationScreenProp
} from "react-navigation";
import {
  CounterAction,
  counterReducer,
  counterState
} from "./components/CounterStateReducer";
import {
  LoginAction,
  loginReducer,
  loginState
} from "./components/LoginStateReducer";
import { assertNever } from "./utils";

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
  | { type: "LoadingStart"; message?: string }
  | { type: "LoadingEnd" }
  | { type: "Error"; error: Error }
  | { type: "NavigateToCounter"; count: number }
  | { type: "NavigateToLogin"; email: string; password?: string };

export type Action = CounterAction | LoginAction | RootAction;

const combinedReducers = combineReducers<any>({
  counter: counterReducer,
  login: loginReducer
});

export const reducer: Reducer<State, Action> = (state, action) => {
  state = state || initialState;
  action = action as RootAction;

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
  reducer,
  initialState,
  applyMiddleware(thunk)
);

export type ConnectedProp<P = {}> = {
  dispatch: (action: Action) => void;
  navigation: NavigationScreenProp<P, {}>;
};

export function withLoadingAndErrorDispatcher(
  f: (...args: any[]) => Promise<any>,
  args: any[] = [],
  message?: string
) {
  return () => {
    store.dispatch({
      type: "LoadingStart",
      message
    });

    f(...args)
      .then(success => {
        store.dispatch({
          type: "LoadingEnd"
        });
        return success;
      })
      .catch(async (error: Error | Response) => {
        console.log("withLoadingAndErrorDispatcher:error", error);
        if (!(error as Error).message) {
          const text = await (error as Response).text();
          error = new Error(text);
        }
        store.dispatch({
          type: "LoadingEnd"
        });
        store.dispatch({
          type: "Error",
          error: error as Error
        });
      });
  };
}
