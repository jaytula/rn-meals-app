import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoriesScreen = props => {
  const renderGridItem = itemData => (
    <CategoryGridTitle
      onSelect={() =>
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: { categoryId: itemData.item.id }
        })
      }
      title={itemData.item.title}
      color={itemData.item.color}
    />
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
