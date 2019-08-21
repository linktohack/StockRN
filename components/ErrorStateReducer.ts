import { NavigationActions } from "react-navigation";
import { navigatorRef } from "../navigator";

import { Reducer } from "redux";
import { assertNever } from "../utils";

export const errorState = {
  error: null as Error | null
};

export type ErrorState = typeof errorState;

export type ErrorAction = { type: "Error"; error?: Error };

export const errorReducer: Reducer<ErrorState, ErrorAction> = (
  state,
  action
) => {
  state = state || errorState;

  // switch (action.type) {
  //   case "Error":
  return { ...state, error: action.error || null };

  //   default:
  //     assertNever(action);
  //     return state;
  // }
};
