import { RouteProp, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

import { RootStackParamList } from "../types/navigation.types";

type MealsOverviewRouteProp = RouteProp<RootStackParamList, 'MealsOverview'>;

function MealsOverviewScreen() {
  const route = useRoute<MealsOverviewRouteProp>();
  
  const { title } = route.params; 
  console.log(route);

  return (
    <View style={styles.container}>
      <Text>Meals overveiw screen for {title}</Text>
    </View>
  );
}
export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
