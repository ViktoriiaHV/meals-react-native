import { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";

function Subtitle({ children }: { children: ReactNode }) {
  return (
    <View style={styles.subtitleWrapper}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
  subtitleWrapper: {
    marginHorizontal: 24,
    marginVertical: 10,
    padding: 6,
    borderBottomColor: "#9e6c9c",
    borderBottomWidth: 2,
  },
  subtitle: {
    fontFamily: "Lato_700Bold_Italic",
    fontSize: 20,
    color: "#9e6c9c",
  },
});
