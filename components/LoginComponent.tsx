import { connect } from "react-redux";
import React, { FunctionComponent } from "react";
import { Button, Text, TextInput, View } from "react-native";
import {
  ConnectedProp,
  initialState,
  State,
  withLoadingAndErrorDispatcher
} from "../store";
import { accountApi } from "../api";
import { LoginState } from "./LoginStateReducer";

type LoginConnect = LoginState & {
  loading: string | boolean;
  error: Error | null;
};

export const LoginComponent: FunctionComponent<
  LoginConnect & ConnectedProp
> = ({ email, password, token, loading, error, dispatch }) => {
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
})(LoginComponent);
