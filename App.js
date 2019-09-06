import React, { useState } from "react";
import * as Font from "expo-font";

import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { useScreens } from "react-native-screens";

useScreens();

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
  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "open-sans-bold"
  }
});
