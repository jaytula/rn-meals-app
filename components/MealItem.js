import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import DefaultText from "./DefaultText";

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={styles.gridItem}>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              style={styles.bgImage}
              source={{ uri: props.image }}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <DefaultText>{props.duration}m</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  title: {
    fontFamily: "open-sans-bold",
    color: "white",

    fontSize: 22,

    textAlign: "center"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "85%"
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%"
  }
});

export default MealItem;
