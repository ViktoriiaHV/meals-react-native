import {
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
} from "@expo-google-fonts/lato";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { ReactNode, useLayoutEffect } from "react";

import { FavouritesProvider } from "../store/favourites-context";

function Layout({ children }: { children: ReactNode }) {
  const [fontsLoaded, fontsError] = useFonts({
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
  });

  useLayoutEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);
  return (
    <FavouritesProvider>
      <StatusBar style="auto" />
      {children}
    </FavouritesProvider>
  );
}
export default Layout;
