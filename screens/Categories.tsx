import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useMemo } from "react";
import { FlatList, Text } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";

type RootStackParamList = {
  Home: undefined;
  Category: { category: string };
};

const renderCategoryItem = ({ item: { color, title } }: { item: Category }) => {
  const onPressHandler = () => {};
  return (
    <CategoryGridTile
      color={color}
      title={title}
      handleCategoryPress={onPressHandler}
    />
  );
};

function CategoriesScreen({
  navigation,
}: NativeStackNavigationProp<RootStackParamList, "Category">) {
  const renderCategoryItem = useCallback(
    ({ item: { color, title } }: { item: Category }) => {
      const onPressHandler = () => {};
      return (
        <CategoryGridTile
          color={color}
          title={title}
          handleCategoryPress={onPressHandler}
        />
      );
    },
    []
  );

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      numColumns={2}
      keyExtractor={(item) => item.id}
    />
  );
}

export default CategoriesScreen;
