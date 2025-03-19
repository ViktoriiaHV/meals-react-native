import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

import Category from "../models/category";

type CategoryGridTileProps = Partial<Category> & {
  handleCategoryPress: () => void;
};

function CategoryGridTile({
  title,
  color,
  handleCategoryPress,
}: CategoryGridTileProps) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleCategoryPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4, //android only
    backgroundColor: "#fff",
    // this will only work if adding background color
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ android: "hidden" }),
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    // opacity: 0.5,
    transform: [{ scale: 1.1 }],
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontFamily: "Lato_700Bold",
  },
});
