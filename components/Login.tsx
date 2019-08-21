import { connect } from "react-redux";
import React, { FunctionComponent } from "react";
import { Button, Text, TextInput, View } from "react-native";
import {
  State,
  withLoadingAndErrorDispatcher,
  initialState,
  ConnectedProp,
  assertNever
} from "../store";
import { accountApi } from "../api";
import { AccountToken } from "../api/fetch";

export const loginState = {
  email: "",
  password: "",
  token: ""
};

export type LoginState = typeof loginState;

export type LoginAction =
  | { type: "LoginChangeEmail"; email: string }
  | { type: "LoginChangePassword"; password: string }
  | { type: "LoginSuccess"; token: string }
  | { type: "LoginFailed"; error: Error };

export const loginReducer: (
  state: LoginState | undefined,
  action: LoginAction
) => LoginState = (state, action) => {
  state = state || loginState;

  switch (action.type) {
    case "LoginChangeEmail":
      return { ...state, email: action.email };
    case "LoginChangePassword":
      return { ...state, password: action.password };
    case "LoginSuccess":
      return { ...state, loading: false, token: action.token };
    case "LoginFailed":
      return { ...state, loading: false, error: action.error };
    default:
      assertNever(action);
      return state;
  }
};

type LoginConnect = LoginState & {
  loading: string | boolean;
  error: Error | null;
};

export const LoginP: FunctionComponent<LoginConnect & ConnectedProp> = ({
  email,
  password,
  token,
  loading,
  error,
  dispatch,
  navigation
}) => {
  const login = async () => {
    console.log("logging in");
    const token = await accountApi.accountLogin({
      credentials: {
        email: email,
        password: password
      }
    });
    dispatch({
      type: "LoginSuccess",
      token: token.id
    });
  };

  const navigateToCounter = () => {
    dispatch({ type: "CounterChange", newValue: 5 });
    navigation.navigate("Counter", {
      withMissingCount: 5
    });
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        autoCapitalize={"none"}
        keyboardType={"email-address"}
        value={email}
        onChangeText={text =>
          dispatch({ type: "LoginChangeEmail", email: text })
        }
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        value={password}
        onChangeText={text =>
          dispatch({ type: "LoginChangePassword", password: text })
        }
      />
      <Text>Loading: {(loading && "loading") || "no"}</Text>
      <Text>Token: {token}</Text>
      <Text>Error: {(error && error.message) || "No error"}</Text>
      <Button onPress={withLoadingAndErrorDispatcher(login)} title="Login" />
      <Button onPress={navigateToCounter} title="Navigate to Counter" />
      <Button
        onPress={() =>
          dispatch({ type: "NavigateToCounter",  count: 5 })
        }
        title="Navigate to Counter via Redux"
      />
    </View>
  );
};

export const Login = connect((state: State) => {
  state = state || initialState;
  return { ...state.login, loading: state.loading, error: state.error };
})(LoginP);
