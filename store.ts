import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import thunk from "redux-thunk";
import { NavigationActions, NavigationScreenProp } from "react-navigation";
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
import {
  LoadingAction,
  loadingReducer,
  loadingState
} from "./components/LoadingStateReducer";
import { navigatorRef } from "./navigator";
import {
  ErrorAction,
  errorReducer,
  errorState
} from "./components/ErrorStateReducer";
import {
  EntreeSortieListAction,
  entreeSortieListReducer,
  entreeSortieState
} from "./components/EntreeSortieListStateReducer";

export const initialState = {
  counter: counterState,
  login: loginState,
  entreeSorties: entreeSortieState,
  loading: loadingState,
  error: errorState
};

export type State = typeof initialState;

export type NavigationAction =
  | { type: "NavigateToCounter"; count: number }
  | { type: "NavigateToLogin"; email: string; password?: string }
  | { type: "NavigateToEntreeSortieList" };

export type Action =
  | CounterAction
  | LoginAction
  | LoadingAction
  | EntreeSortieListAction
  | ErrorAction
  | NavigationAction;

const combinedReducers = combineReducers<any>({
  counter: counterReducer,
  login: loginReducer,
  loading: loadingReducer,
  entreeSorties: entreeSortieListReducer,
  error: errorReducer
});

export const reducer: Reducer<State, Action> = (state, action) => {
  state = state || initialState;
  action = action as NavigationAction;

  switch (action.type) {
    case "NavigateToCounter":
      navigatorRef &&
        navigatorRef.dispatch(
          NavigationActions.navigate({
            routeName: "Counter"
          })
        );
      return { ...state, counter: { count: action.count } };
    case "NavigateToLogin":
      navigatorRef &&
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
    case "NavigateToEntreeSortieList":
      navigatorRef &&
        navigatorRef.dispatch(
          NavigationActions.navigate({
            routeName: "EntreeSortieList"
          })
        );
      return {
        ...state
      };
    default:
      assertNever(action);
      return combinedReducers(state, action);
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
  return async () => {
    store.dispatch({
      type: "LoadingStart",
      message
    });

    return f(...args)
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
