import { ReactNode } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Platform,
} from "react-native";

import Meal from "../models/meal";

const DetailItem = ({ children }: { children: ReactNode }) => (
  <Text style={styles.detailItem}>{children}</Text>
);

const MealItem = ({
  item: { title, imageUrl, duration, complexity, affordability },
}: {
  item: Meal;
}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.tilePressed}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <DetailItem>{duration}m</DetailItem>
            <DetailItem>{complexity.toUpperCase()}</DetailItem>
            <DetailItem>{affordability.toUpperCase()}</DetailItem>
          </View>
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
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
    padding: 16,
  },
  detailItem: {
    fontFamily: "Lato_300Light_Italic",
    fontSize: 12,
    color: "#3d3c3c",
  },
  tilePressed: {
    opacity: Platform.select({ ios: 0.8 }),
  },
});
