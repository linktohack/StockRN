import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Counter } from "./components/CounterComponent";
import { Login } from "./components/LoginComponent";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Loading } from "./components/LoadingComponent";
import { Dimensions } from "react-native";
import { setTopLevelNavigator } from "./navigator";
import { ErrorView } from "./components/ErrorComponent";

const { width, height } = Dimensions.get("window");

const RootStack = createStackNavigator(
  {
    Login: Login,
    Counter: Counter
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam("title") || navigation.state.routeName
      };
    }
  }
);

const Navigation = createAppContainer(RootStack);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation
        style={{ width, height }}
        ref={navigatorRef => {
          setTopLevelNavigator(navigatorRef!);
        }}
      />
      <Loading style={{ width, height }} />
      <ErrorView style={{ width, height }} />
    </Provider>
  );
}
