import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoriesScreen = props => {
  const renderGridItem = itemData => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: { categoryId: itemData.item.id }
        })
      }
    >
      <View>
        <Text style={{ color: itemData.item.color }}>
          {itemData.item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};
const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    margin: 15,
    borderRadius: 10
  }
});
export default CategoriesScreen;
