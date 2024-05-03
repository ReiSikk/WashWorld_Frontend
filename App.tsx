import React from "react";
import { NativeBaseProvider, Box, extendTheme, useTheme, Text } from "native-base";
import ProductCardDark from "./components/ProductCardDark";
import * as Font from 'expo-font';
import WelcomeScreen from "./screens/WelcomeScreen";
import { Button } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from "./screens/MainNavigation";

Font.loadAsync({
  'font-extraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
  'font-medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'font-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'font-light': require('./assets/fonts/Poppins-Light.ttf'),
  // Include other variants here
});

//custom theme
const customTheme = extendTheme({
  colors: {
    primary: {
      50: '#06C167',  // Lightest shade (used for hover, pressed states, etc.)
      100: '#06C167',
      200: '#06C167',
      300: '#06C167',
      400: '#06C167',
      500: '#06C167',  // Default primary color
      600: '#06C167',
      700: '#06C167',
      800: '#06C167',
      900: '#06C167',  // Darkest shade
    },
    greenWhite:"#06C167",
    greenBlack:'#0CE578',
    white: "#FFFFFF",
    orange: "#FF6B06",
    black: "#1A1A1A",
    grey80: "#333333",
    grey60: "#666666",
    grey10: "#E5E5E5",
    grey5: "#F7F7F7",

  },
  components: {
    Button: {
          color: 'colors.white',
          backgroundColor: 'colors.greenWhite',
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
    separator: "0.25px solid #E5E5E5",
    borderRadius: 4,
  }
});

type CustomThemeType = typeof customTheme;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}


export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <MainNavigation>
      </MainNavigation> 
      {/* <ProductCardDark />
      <WelcomeScreen /> */}
    </NativeBaseProvider>
  );
}