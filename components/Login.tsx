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
import { Reducer } from "redux";

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

export const loginReducer: Reducer<LoginState, LoginAction> = (
  state,
  action
) => {
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
  dispatch
}) => {
  const login = async () => {
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
      <Text>Loading: {(loading === true && "yes") || loading || "no"}</Text>
      <Text>Token: {token}</Text>
      <Text>Error: {(error && error.message) || "No error"}</Text>
      <Button
        onPress={withLoadingAndErrorDispatcher(login, [], "Logging in...")}
        title="Login"
      />
      <Button
        onPress={() => dispatch({ type: "NavigateToCounter", count: 5 })}
        title="Navigate to Counter"
      />
    </View>
  );
};

export const Login = connect((state: State) => {
  state = state || initialState;
  return { ...state.login, loading: state.loading, error: state.error };
})(LoginP);
