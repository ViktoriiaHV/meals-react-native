import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import MealItemDetails from "../components/MealItemDetails";
import {
  CategoriesScreenNavigationProp,
  MealDetailRouteProp,
} from "../types/navigation.types";

function MealDetailsScreen() {
  const route = useRoute<MealDetailRouteProp>();
  const navigation = useNavigation<CategoriesScreenNavigationProp>();

  const { title, imageUrl, affordability, complexity, duration, ingredients, steps } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [navigation, title]);

  return (
    <View>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text>{title} Details</Text>
      <MealItemDetails
        affordability={affordability}
        complexity={complexity}
        duration={duration}
      />
      {/* INGREDIENTS */}
      <Text>Ingrediens</Text>
      {ingredients.map((ingredient: string) => <Text key={ingredient}>{ingredient}</Text>)}
      {/* STEPS */}
      <Text>Steps</Text>
      {steps.map((step: string) => <Text key={step}>{step}</Text>)}
    </View>
  );
}
export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});
