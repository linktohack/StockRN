import React, { FunctionComponent } from "react";
import { Button, Overlay, Text } from "react-native-elements";
import { connect } from "react-redux";
import { ConnectedProp, initialState, State } from "../store";
import { ErrorState } from "./ErrorStateReducer";
import { SafeAreaView, View } from "react-native";

export const ErrorComponent: FunctionComponent<ErrorState & ConnectedProp> = ({
  error,
  dispatch
}) => {
  return (
    <Overlay
      isVisible={!!error}
      onBackdropPress={() => dispatch({ type: "Error" })}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Text>{error && error.message}</Text>
        <View style={{ flex: 1 }} />
        <Button
          containerStyle={{ margin: 20 }}
          onPress={() => dispatch({ type: "Error" })}
          title={"Close"}
        />
      </SafeAreaView>
    </Overlay>
  );
};

export const ErrorView = connect((state: State) => {
  return (state || initialState).error;
})(ErrorComponent);
