import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem = ({ item: { color, title } }: { item: Category }) => (
  <CategoryGridTile color={color} title={title} />
);

function CategoriesScreen() {
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
