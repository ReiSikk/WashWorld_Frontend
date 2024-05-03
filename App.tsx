import React from "react";
import { NativeBaseProvider, Box, extendTheme, useTheme, Text } from "native-base";
import ProductCardDark from "./components/ProductCardDark";
import * as Font from 'expo-font';
import WelcomeScreen from "./screens/WelcomeScreen";
import { Button } from "react-native";
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
      50: '#0CE578',  // Lightest shade (used for hover, pressed states, etc.)
      100: '#0CE578',
      200: '#0CE578',
      300: '#0CE578',
      400: '#0CE578',
      500: '#0CE578',  // Default primary color
      600: '#0CE578',
      700: '#0CE578',
      800: '#0CE578',
      900: '#0CE578',  // Darkest shade
    },
    greenWhite:"#06C167",
    greenBlack:'#0CE578',
    white: "#FFFFFF",
    orange: "#FF6B06",
    black: "#1A1A1A",
    gray80: "#333333",
    gray60: "#666666",
    gray10: "#E5E5E5",
    gray5: "#F7F7F7",

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