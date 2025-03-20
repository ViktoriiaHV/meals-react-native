import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Category from "../models/category";
import Meal from "../models/meal";

export type RootStackParamList = {
  Categories: undefined;
  MealsOverview: Partial<Category>;
  MealDetails: Partial<Meal>;
};

export type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MealsOverview"
>;

export type MealsOverviewRouteProp = RouteProp<RootStackParamList, "MealsOverview">;

export type MealDetailRouteProp = RouteProp<RootStackParamList, "MealDetails">;