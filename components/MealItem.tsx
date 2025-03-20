import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Platform,
} from "react-native";

import MealItemDetails from "./MealItemDetails";
import Meal from "../models/meal";
import { HomeScreenNavigationProp } from "../types/navigation.types";

const MealItem = ({ item }: { item: Meal }) => {
  const { title, imageUrl } = item;
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const handlePressMeal = () => {
    navigation.navigate("MealDetails", { ...item });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.tilePressed}
        onPress={handlePressMeal}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealItemDetails {...item} />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    elevation: 4, //android only
    backgroundColor: "#fff",
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ android: "hidden" }),
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    textAlign: "center",
    fontFamily: "Lato_700Bold",
    fontSize: 20,
    margin: 8,
  },
  tilePressed: {
    opacity: Platform.select({ ios: 0.8 }),
  },
});
