import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { MEALS } from "../data/dummy-data";

const MealsDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const meal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <View>
        <Text>{meal.duration}m</Text>
      </View>
      <View>
        <Text>{meal.affordability}</Text>
      </View>
      <View>
        <Text>{meal.complexity}</Text>
      </View>
    </View>
  );
};

MealsDetailScreen.navigationOptions = navigationOptions => {
  const mealId = navigationOptions.navigation.getParam("mealId");
  const meal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: meal.title
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default MealsDetailScreen;
