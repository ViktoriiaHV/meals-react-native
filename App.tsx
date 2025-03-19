import {
  Lato_400Regular,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_700Bold,
  Lato_900Black,
  useFonts,
} from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";

import CategoriesScreen from "./screens/Categories";
import MealsOverviewScreen from "./screens/MealsOverview";
import { RootStackParamList } from "./types/navigation.types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Lato_400Regular,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_700Bold,
    Lato_900Black,
  });

  useLayoutEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: { backgroundColor: "#ecc8e1" },
            headerTintColor: "#88005f",
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
