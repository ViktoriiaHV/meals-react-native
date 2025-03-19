import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Category from "../models/category";

export type RootStackParamList = {
  Categories: undefined;
  MealsOverview: Partial<Category>;
};

export type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MealsOverview"
>;