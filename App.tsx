import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Layout from "./layout/Layout";
import CategoriesScreen from "./screens/Categories";
import MealDetailsScreen from "./screens/MealDetails";
import MealsOverviewScreen from "./screens/MealsOverview";
import { RootStackParamList } from "./types/navigation.types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Layout>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: { backgroundColor: "#ecc8e1" },
            headerTintColor: "#88005f",
            headerTitleStyle: {
              fontFamily: "Lato_900Black",
            },
            headerBackTitleStyle: {
              fontFamily: "Lato_400Regular_Italic",
            },
            contentStyle: {
              backgroundColor: "#f2dbee",
            },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // @INFO used alternative way inside the component itself
            // options={({ route }) => ({
            //   title: route.params.title,
            // })}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            // options={{headerRight: () => <Text>hoho</Text>}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Layout>
  );
}
