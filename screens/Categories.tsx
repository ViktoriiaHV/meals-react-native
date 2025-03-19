import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import { RootStackParamList } from "../types/navigation.types";

type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MealsOverview"
>;

const CategoryItem = ({ item: { color, title, id } }: { item: Category }) => {
  const navigator = useNavigation<CategoriesScreenNavigationProp>();

  console.log(navigator.getState())
  const onPressHandler = () => {
    navigator.navigate("MealsOverview", { id, title });
  };
  return (
    <CategoryGridTile
      color={color}
      title={title}
      handleCategoryPress={onPressHandler}
    />
  );
};

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(item) => <CategoryItem {...item} />}
      numColumns={2}
      keyExtractor={(item) => item.id}
    />
  );
}

export default CategoriesScreen;
