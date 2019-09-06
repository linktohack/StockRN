import { Reducer } from "redux";
import { assertNever } from "../utils";

export const counterState = {
  count: 0
};

export type CounterState = typeof counterState;

export type CounterAction =
  | { type: "CounterIncrement" }
  | { type: "CounterDecrement" }
  | { type: "CounterChange"; newValue: number };

export const counterReducer: Reducer<CounterState, CounterAction> = (
  state = counterState,
  action
) => {
  switch (action.type) {
    case "CounterIncrement":
      return { ...state, count: state.count + 1 };
    case "CounterDecrement":
      return { ...state, count: state.count - 1 };
    case "CounterChange":
      return { ...state, count: action.newValue };
    default:
      assertNever(action);
      return state;
  }
};
