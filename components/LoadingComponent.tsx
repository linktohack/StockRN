import React, { FunctionComponent } from "react";
import { Overlay, Text } from "react-native-elements";
import { connect } from "react-redux";
import { ConnectedProp, initialState, State } from "../store";
import { LoadingState } from "./LoadingStateReducer";

export const LoadingComponent: FunctionComponent<
  LoadingState & ConnectedProp
> = ({ loading }) => {
  return (
    <Overlay isVisible={!!loading}>
      <Text>{loading === true ? "LoadingComponent" : loading}</Text>
    </Overlay>
  );
};

export const Loading = connect((state: State) => {
  return (state: State) => (state || initialState).loading;
})(LoadingComponent);
