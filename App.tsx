import React from "react";
import { Provider } from "react-redux";
import { setTopLevelNavigator, store } from "./store";
import { Counter } from "./components/CounterComponent";
import { Login } from "./components/LoginComponent";
import { createAppContainer, createStackNavigator } from "react-navigation";

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
        ref={navigatorRef => {
          setTopLevelNavigator(navigatorRef!);
        }}
      />
    </Provider>
  );
}
