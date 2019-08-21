import { connect } from "react-redux";
import React, { FunctionComponent, useEffect } from "react";
import { Button, Card, Input, Text } from "react-native-elements";
import {
  ConnectedProp,
  initialState,
  State,
  withLoadingAndErrorDispatcher
} from "../store";
import { accountApi } from "../api";
import { LoginState } from "./LoginStateReducer";
import { SafeAreaView, View } from "react-native";

type LoginConnect = LoginState & {
  error: Error | null;
};

export const LoginComponent: FunctionComponent<
  LoginConnect & ConnectedProp
> = ({ email, password, token, error, dispatch, navigation }) => {
  useEffect(() => {
    email &&
      navigation.setParams({
        title: `Login: ${email}`
      });
  }, [email]);

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
    dispatch({ type: "NavigateToEntreeSortieList" });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card>
        <Input
          autoCapitalize={"none"}
          keyboardType={"email-address"}
          value={email}
          onChangeText={text =>
            dispatch({ type: "LoginChangeEmail", email: text })
          }
          label={"Email"}
        />
        <View style={{ height: 20 }} />
        <Input
          label={"Password"}
          secureTextEntry={true}
          value={password}
          onChangeText={text =>
            dispatch({ type: "LoginChangePassword", password: text })
          }
        />
        <View style={{ height: 20 }} />
        <Button
          onPress={withLoadingAndErrorDispatcher(login, [], "Logging in...")}
          title="Login"
        />
      </Card>
      <View style={{ height: 20 }} />
      <Button
        type={"outline"}
        containerStyle={{ margin: 20 }}
        onPress={() => dispatch({ type: "NavigateToCounter", count: 5 })}
        title="Navigate to Counter"
      />
      <View style={{ flex: 1 }} />
      <Text>Token: {token}</Text>
    </SafeAreaView>
  );
};

export const Login = connect((state: State) => {
  return (state || initialState).login;
})(LoginComponent);
