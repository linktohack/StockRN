import React, { FunctionComponent, useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import { Button, Card, Input } from "react-native-elements";
import { connect } from "react-redux";
import { ConnectedProp, initialState, State } from "../store";
import { CounterState } from "./CounterStateReducer";

export const CounterComponent: FunctionComponent<
  CounterState & ConnectedProp
> = ({ count, dispatch, navigation }) => {
  useEffect(() => {
    navigation.setParams({
      title: `Counter: ${count}`
    });
  }, [count]);

  return (
    <SafeAreaView>
      <Card title={"Counter Form"}>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <Button
            containerStyle={{ flex: 1 }}
            onPress={() => dispatch({ type: "CounterDecrement" })}
            title="-"
          />
          <View style={{ width: 20 }} />
          <Input
            containerStyle={{ flex: 2 }}
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 4,
              paddingLeft: 10,
              paddingRight: 10
            }}
            inputStyle={{
              textAlign: "right"
            }}
            shake={true}
            errorMessage={count % 2 === 1 ? "oops" : undefined}
            errorStyle={{
              textAlign: "right"
            }}
            placeholder="Input"
            onChangeText={text => {
              let newValue = parseInt(text);
              newValue = isNaN(newValue) ? 0 : newValue;
              dispatch({ type: "CounterChange", newValue });
            }}
            value={`${count}`}
            keyboardType="number-pad"
          />
          <View style={{ width: 20 }} />
          <Button
            containerStyle={{ flex: 1 }}
            onPress={() => dispatch({ type: "CounterIncrement" })}
            title="+"
          />
        </View>
      </Card>
      <View style={{ height: 40 }} />

      <Button
        type={"outline"}
        style={{
          margin: 20
        }}
        onPress={() =>
          dispatch({
            type: "NavigateToLogin",
            email: "super@hyrule.me",
            password: "test"
          })
        }
        title="Navigate to Login with information"
      />
    </SafeAreaView>
  );
};

export const Counter = connect((state: State = initialState) => state.counter)(
  CounterComponent
);
