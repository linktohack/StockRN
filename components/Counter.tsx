import React, { FunctionComponent } from "react";
import { Button, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { assertNever, State, initialState, ConnectedProp } from "../store";
import { Reducer } from "redux";

export const counterState = {
  count: 0
};

export type CounterState = typeof counterState;

export type CounterAction =
  | { type: "CounterIncrement" }
  | { type: "CounterDecrement" }
  | { type: "CounterChange"; newValue: number };

export const counterReducer: Reducer<CounterState, CounterAction> = (
  state,
  action
) => {
  state = state || counterState;

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

export const CounterP: FunctionComponent<CounterState & ConnectedProp> = ({
  count,
  dispatch
}) => {
  return (
    <View style={{ display: "flex" }}>
      <Button
        onPress={() => dispatch({ type: "CounterIncrement" })}
        title="Increment"
      />
      <TextInput
        onChangeText={text => {
          let newValue = parseInt(text);
          newValue = isNaN(newValue) ? 0 : newValue;
          dispatch({ type: "CounterChange", newValue });
        }}
        value={`${count}`}
        keyboardType="number-pad"
      />
      <Button
        onPress={() => dispatch({ type: "CounterDecrement" })}
        title="Decrement"
      />
      <Button
        onPress={() =>
          dispatch({
            type: "NavigateToLogin",
            email: "super@hyrule.me",
            password: "test"
          })
        }
        title="Navigate to Login with information"
      />
    </View>
  );
};

export const Counter = connect(
  (state: State) => (state || initialState).counter
)(CounterP);
