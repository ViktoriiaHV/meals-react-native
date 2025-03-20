import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Category from "../models/category";
import Meal from "../models/meal";

export type RootStackParamList = {
  Homepage: undefined;
  MealsOverview: Partial<Category>;
  MealDetails: Partial<Meal>;
};

export type DrawerParamList = {
  Categories: undefined;
  Favourites: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Homepage"
>;

export type MealsOverviewRouteProp = RouteProp<RootStackParamList, "MealsOverview">;

export type MealDetailRouteProp = RouteProp<RootStackParamList, "MealDetails">;
