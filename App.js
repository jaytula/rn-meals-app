import React, { useState } from "react";
import * as Font from "expo-font";

import { AppLoading } from "expo";
import { useScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import mealsReducer from "./store/reducers/meals";

useScreens();
const rootReducer = combineReducers({ meals: mealsReducer });
const store = createStore(rootReducer);

import MealsNavigator from "./navigation/MealsNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [appReady, setAppReady] = useState(false);

  if (!appReady) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
