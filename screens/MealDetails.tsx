import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useEffect, useMemo } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

import IconButton from "../components/MealDetail/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealItemDetails from "../components/MealItemDetails";
import { useFavourites } from "../store/favourites-context";
import {
  HomeScreenNavigationProp,
  MealDetailRouteProp,
} from "../types/navigation.types";

function MealDetailsScreen() {
  const route = useRoute<MealDetailRouteProp>();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {
    id,
    title,
    imageUrl,
    affordability,
    complexity,
    duration,
    ingredients,
    steps,
  } = route.params;

  const { ids: favourites, addFavourite, removeFavourite } = useFavourites();

  const isFavourite = useMemo(() => favourites.includes(id), [favourites, id]);

  const handleFavouriteIconPress = useCallback(() => {
    if (isFavourite) {
      removeFavourite(id);
    } else {
      addFavourite(id);
    }
  }, [addFavourite, id, isFavourite, removeFavourite]);

  useEffect(() => {
    navigation.setOptions({
      title,
      headerRight: () => (
        <IconButton
          icon={isFavourite ? "star" : "star-outline"}
          color="#430841"
          onPress={handleFavouriteIconPress}
        />
      ),
    });
  }, [handleFavouriteIconPress, isFavourite, navigation, title]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealItemDetails
        affordability={affordability}
        complexity={complexity}
        duration={duration}
      />

      <Subtitle>Ingrediens</Subtitle>
      <List items={ingredients} />

      <Subtitle>Steps</Subtitle>
      <List items={steps} />
    </ScrollView>
  );
}
export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontFamily: "Lato_700Bold",
    fontSize: 24,
    margin: 12,
    textAlign: "center",
  },
});
