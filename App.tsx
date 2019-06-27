import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import { Counter } from "./components/Counter";
import { Login } from "./components/Login";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
        <Login />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center"
  }
});
