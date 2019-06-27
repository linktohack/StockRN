import React, { FunctionComponent } from "react";
import { Button, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { Action, initialState, State } from "../store";

export const CounterP: FunctionComponent<{
  count: number;
  dispatch: (action: Action) => void;
}> = ({ count, dispatch }) => {
  return (
    <View style={{ display: "flex" }}>
      <Button
        onPress={() => dispatch({ type: "Increment" })}
        title="Increment"
      />
      <TextInput
        onChangeText={text => {
          let newValue = parseInt(text);
          newValue = isNaN(newValue) ? 0 : newValue;
          dispatch({ type: "Change", newValue });
        }}
        value={`${count}`}
        keyboardType="number-pad"
      />
      <Button
        onPress={() => dispatch({ type: "Decrement" })}
        title="Decrement"
      />
    </View>
  );
};

export const Counter = connect((state: State) => {
  state = state || initialState;
  return { count: state.count };
})(CounterP);
