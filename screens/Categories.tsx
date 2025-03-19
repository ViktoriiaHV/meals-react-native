import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import { CategoriesScreenNavigationProp } from "../types/navigation.types";


const CategoryItem = ({ item: { color, title, id } }: { item: Category }) => {
  const navigation = useNavigation<CategoriesScreenNavigationProp>();

  const onPressHandler = () => {
    navigation.navigate("MealsOverview", { id, title });
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
