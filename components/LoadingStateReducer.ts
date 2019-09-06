import { NavigationActions } from "react-navigation";
import { navigatorRef } from "../navigator";

import { Reducer } from "redux";
import { assertNever } from "../utils";

export const loadingState = {
  loading: false as string | boolean
};

export type LoadingState = typeof loadingState;

export type LoadingAction =
  | { type: "LoadingStart"; message?: string }
  | { type: "LoadingEnd" };

export const loadingReducer: Reducer<LoadingState, LoadingAction> = (
  state = loadingState,
  action
) => {
  switch (action.type) {
    case "LoadingStart":
      navigatorRef &&
        navigatorRef.dispatch(
          NavigationActions.navigate({
            routeName: "LoadingComponent"
          })
        );
      return { ...state, loading: action.message || true };
    case "LoadingEnd":
      navigatorRef && navigatorRef.dispatch(NavigationActions.back());
      return { ...state, loading: false };

    default:
      assertNever(action);
      return state;
  }
};
