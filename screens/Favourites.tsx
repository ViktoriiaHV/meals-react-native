import { FlatList, StyleSheet, Text, View } from "react-native";

import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { useFavourites } from "../store/favourites-context";

function FavouritesScreen() {
  const { ids } = useFavourites();

  const favouriteItems = MEALS.filter((meal) => ids.includes(meal.id)) || [];

  if (!favouriteItems.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Start by adding some meals to favourites
        </Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={favouriteItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem item={item} />}
      />
    </View>
  );
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Lato_700Bold_Italic",
    fontSize: 24,
    textAlign: "center",
    color: "#88005f",
  },
});
