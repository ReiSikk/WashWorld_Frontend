import React from "react";
import { NativeBaseProvider, Box, extendTheme, useTheme, Text } from "native-base";
import ProductCardDark from "./components/ProductCardDark";
import * as Font from 'expo-font';

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
      "green-white": "#06C167",
      "green-black": "#0CE578",
      "white": "#FFFFFF",
      "orange": "#FF6B06",
      "black": "#1A1A1A",
      "gray80": "#333333",
      "gray60": "#666666",
      "gray10": "#E5E5E5",
      "gray5": "#F7F7F7",
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
      <ProductCardDark />
    </NativeBaseProvider>
  );
}