import { connect } from "react-redux";
import React, { FunctionComponent } from "react";
import { Button, Text, TextInput, View } from "react-native";
import {
  Action,
  initialState,
  State,
  withLoadingAndErrorDispatcher
} from "../store";
import { accountApi } from "../api";

export const LoginP: FunctionComponent<{
  email: string;
  password: string;
  token: string;
  loading: boolean;
  error?: any;
  dispatch: (action: Action) => void;
}> = ({ email, password, token, loading, error, dispatch }) => {
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
        onChangeText={text => dispatch({ type: "ChangeEmail", email: text })}
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        value={password}
        onChangeText={text =>
          dispatch({ type: "ChangePassword", password: text })
        }
      />
      <Text>Loading: {(loading && "loading") || "no"}</Text>
      <Text>Token: {token}</Text>
      <Text>Error: {(error && error.status) || "No error"}</Text>
      <Button onPress={withLoadingAndErrorDispatcher(login)} title="Login" />
    </View>
  );
};

export const Login = connect((state: State) => {
  state = state || initialState;
  return {
    email: state.login.email,
    password: state.login.password,
    token: state.login.token,
    loading: state.login.loading,
    error: state.error
  };
})(LoginP);
