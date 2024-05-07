import React, { useState, useEffect } from "react";
import { NativeBaseProvider, Box, extendTheme, useTheme, Text } from "native-base";
import ProductCardDark from "./components/ProductCardDark";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import WelcomeScreen from "./screens/WelcomeScreen";
import { Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from "./screens/MainNavigation";
import { store } from './store/store'
import { Provider } from 'react-redux'

const useFonts = async () => {
  await Font.loadAsync({
    'font-extraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'font-medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'font-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'font-light': require('./assets/fonts/Poppins-Light.ttf'),
    // Include other fonts here
  });
};



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
      baseStyle: {
        rounded: 'sm',
      },
      defaultProps: {
        colorScheme: 'primary',
      },
    },
      Text: {
        baseStyle: {
          color: 'black'
        },
        defaultProps: {
          size: 'md'
        },
        sizes: {
          xl: {
            fontSize: '30px'
          },
          lg: {
            fontSize: '22px'
          },
          md: {
            fontSize: '16px'
          },
          sm: {
            fontSize: '12px'
          },
          xs: {
            fontSize: '10px'
          }
        }
      }
  },
  fonts: {
    // Define your custom fonts
    extrabold: "font-extraBold",
    medium: "font-medium",
    normal: "font-regular",
    light: "font-light",
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
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Load fonts
        await useFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return (
    <Provider store={store}>
    <NativeBaseProvider theme={customTheme}>
      <MainNavigation>
      </MainNavigation> 
      {/* <ProductCardDark />
      <WelcomeScreen /> */}
    </NativeBaseProvider>
    </Provider>
  );
}