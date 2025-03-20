import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import {
  HomeScreenNavigationProp,
  MealsOverviewRouteProp,
} from "../types/navigation.types";

function MealsOverviewScreen() {
  const route = useRoute<MealsOverviewRouteProp>();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const { title, id } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [navigation, title]);

  const filteredMeals = MEALS.filter((meal) => meal.categoryIds.includes(id));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title} Meals</Text>
      <FlatList
        data={filteredMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem item={item} />}
      />
    </View>
  );
}
export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontFamily: "Lato_300Light_Italic",
    fontWeight: "700",
    fontSize: 32,
    textAlign: "center",
    paddingBottom: 16,
  },
});
