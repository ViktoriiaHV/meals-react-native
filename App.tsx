import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Layout from "./layout/Layout";
import CategoriesScreen from "./screens/Categories";
import FavouritesScreen from "./screens/Favourites";
import MealDetailsScreen from "./screens/MealDetails";
import MealsOverviewScreen from "./screens/MealsOverview";
import { DrawerParamList, RootStackParamList } from "./types/navigation.types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator<DrawerParamList>();

const createDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ecc8e1" },
        headerTintColor: "#88005f",
        headerTitleStyle: {
          fontFamily: "Lato_900Black",
        },
        drawerContentStyle: {
          backgroundColor: "#f2dbee",
        },
        drawerActiveTintColor: "#88005f",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen name="Favourites" component={FavouritesScreen} options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <Layout>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Homepage"
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
            name="Homepage"
            component={createDrawerNavigation}
            options={{
              headerShown: false,
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
