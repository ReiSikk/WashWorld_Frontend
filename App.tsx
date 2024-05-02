import React from "react";
import { NativeBaseProvider, Box, extendTheme, useTheme, Text } from "native-base";
import * as Font from 'expo-font';
import WelcomeScreen from "./screens/WelcomeScreen";

Font.loadAsync({
  'font-extraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
  'font-medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'font-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'font-light': require('./assets/fonts/Poppins-Light.ttf'),
  // Include other variants here
});

//custom theme
const theme = extendTheme({
  colors: {
    primary: {
      50: "#0CE578",
      100: "#0CE578",
      200: "#0CE578",
      300: "#0CE578",
      400: "#0CE578",
      500: "#FFFFFF",
      600: "#0CE578",
      700: "#0CE578",
      800: "#0CE578",
      900: "#0CE578",
    },
  },
  fonts: {
    // Define your custom fonts
    extraBold: "font-extraBold",
    medium: "font-medium",
    regular: "font-regular",
    light: "font-light",
  },
  fontSizes: {
    extraLarge: 30,
    large: 22,
    medium: 16,
    light: 12,
    labelSmall: 10,
  },
  borders: {
    "separator": "0.25px solid #E5E5E5",
    "borderRadius": "4px",
  }
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Text fontSize={theme.fontSizes.light}>Hello world</Text>
      <WelcomeScreen></WelcomeScreen>
    </NativeBaseProvider>
  );
}