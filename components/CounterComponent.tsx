import React, { FunctionComponent } from "react";
import { Button, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { ConnectedProp, initialState, State } from "../store";
import { CounterState } from "./CounterStateReducer";

export const CounterComponent: FunctionComponent<
  CounterState & ConnectedProp
> = ({ count, dispatch }) => {
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
)(CounterComponent);
