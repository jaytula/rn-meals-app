import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

import { setFilters } from "../store/actions/meals";

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.state}
        onValueChange={props.onChange}
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
      />
    </View>
  );
};
const FiltersScreen = props => {
  const [glutenFree, setGlutenFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);

  const filteredMeals = useSelector(state => state.meals.filteredMeals);
  const dispatch = useDispatch();

  const { navigation } = props;

  const saveFilters = useCallback(() => {
    const appliedFilters = { glutenFree, vegan, lactoseFree, vegetarian };

    dispatch(setFilters(appliedFilters));
    console.log(appliedFilters);
  }, [dispatch, glutenFree, vegan, vegetarian, lactoseFree]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={glutenFree}
        onChange={newValue => setGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={vegan}
        onChange={newValue => setVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={vegetarian}
        onChange={newValue => setVegetarian(newValue)}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={lactoseFree}
        onChange={newValue => setLactoseFree(newValue)}
      />
      <View>
        <Text>Total Number of Meals: {filteredMeals.length}</Text>
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  }
});
export default FiltersScreen;
