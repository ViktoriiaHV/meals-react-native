import { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";

import Meal from "../models/meal";

const DetailItem = ({ children }: { children: ReactNode }) => (
  <Text style={styles.detailItem}>{children}</Text>
);

function MealItemDetails({
  affordability,
  complexity,
  duration,
}: Pick<Meal, "duration" | "affordability" | "complexity">) {
  return (
    <View style={styles.details}>
      <DetailItem>{duration}m</DetailItem>
      <DetailItem>{complexity.toUpperCase()}</DetailItem>
      <DetailItem>{affordability.toUpperCase()}</DetailItem>
    </View>
  );
}
export default MealItemDetails;

const styles = StyleSheet.create({
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
});
