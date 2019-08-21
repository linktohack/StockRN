import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { store, setTopLevelNavigator } from "./store";
import { Counter } from "./components/Counter";
import { Login } from "./components/Login";
import { createStackNavigator, createAppContainer } from "react-navigation";

const RootStack = createStackNavigator({
  Login: Login,
  Counter: Counter
});

const Navigation = createAppContainer(RootStack);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation
        ref={navigatorRef => {
          setTopLevelNavigator(navigatorRef!);
        }}
      />
    </Provider>
  );
}
