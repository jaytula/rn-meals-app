import { MEALS } from "../../data/dummy-data";

import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      );

      if (existingIndex !== -1) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const mealToAdd = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: [...state.favoriteMeals, mealToAdd] };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter(meal => {
        const filters = [
          {
            name: "glutenFree",
            propName: "isGlutenFree"
          },
          {
            name: "lactoseFree",
            propName: "isLactoseFree"
          },
          {
            name: "vegan",
            propName: "isVegan"
          },
          {
            name: "vegetarian",
            propName: "isVegetarian"
          }
        ];
        return filters.reduce(
          (acc, filter) =>
            acc && (!appliedFilters[filter.name] || meal[filter.propName]),
          true
        );
      });
      return { ...state, filteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
