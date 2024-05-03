import React from "react";
import { Container, useTheme, Button, ICustomTheme, Center, Box, FormControl, Input, Stack, Link, Heading } from "native-base";
import { View, Text, StyleSheet } from "react-native";


function LoginScreen() {
  const theme: ICustomTheme = useTheme();
  const styles = getStyles(theme);
  return (
    <View>
      <Box safeArea p="10" py="8">
        <Box w="100%" maxWidth="300px">
        <Heading size="lg" fontWeight="600" color="black" py="4">
          Log in
        </Heading>
          <FormControl isRequired>
              <FormControl.Label>E-mail</FormControl.Label>
              <Input type="text" placeholder="Your email" autoCapitalize="none" />
          </FormControl>
        </Box>

        <Box w="100%" maxWidth="300px">
          <FormControl isRequired>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" placeholder="Password" />
       
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "grey60"
          }} alignSelf="flex-start" mt="2">
              Forget Password?
            </Link>
          </FormControl>
        </Box>
      </Box>

      <Box alignItems="center">
        <Button w="80%" maxWidth="300px">Log in</Button>
      </Box>
      <Box alignItems="center">
      <Link _text={{
            fontSize: "sm",
            fontWeight: "500",
            color: "black"
          }} alignSelf="center" mt="1" py="6">
              I don't have an account - Sign Up
            </Link>
      </Box>
    </View>
  )
}

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "black",
    },
  });

export default LoginScreen;
