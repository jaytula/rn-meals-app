import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from "react-native";

const CategoryGridTitle = ({ title, color, onSelect }) => {
  let Touchable = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <Touchable style={{ flex: 1 }} onPress={onSelect}>
        <View style={{ ...styles.container, backgroundColor: color }}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  gridItem: {
    flex: 1,
    height: 150,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "black",
    margin: 15,
    borderRadius: 10
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right"
  }
});

export default CategoryGridTitle;
