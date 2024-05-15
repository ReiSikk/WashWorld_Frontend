import React from "react";
import { useState } from "react";
import { Container, useTheme, Button, ICustomTheme, Center, Box, FormControl, Input, Stack, Link, Heading, Checkbox, HStack } from "native-base";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';

type Props = NativeStackScreenProps<RootStackParamList, "SignupScreen">

function SignupScreen({ navigation }: Props) {

  return (

    <View>
      <Box safeArea p="10" py="8">
        <Box w="100%" maxWidth="300px">
        <Heading size="lg" fontWeight="600" color="black" py="4">
          Sign up
        </Heading>
          <FormControl isRequired>
              <FormControl.Label>E-mail</FormControl.Label>
              <Input type="text" placeholder="Your email" autoCapitalize="none" />
          </FormControl>
          <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" placeholder="Choose a password" />
          </FormControl>
        </Box>
        </Box>
    <Box alignItems="center" >
        <Button w="80%" maxWidth="300px">Sign up</Button>
      <Link _text={{
            fontSize: "sm",
            fontWeight: "500",
            color: "black"
          }} alignSelf="center" mt="1" py="6" onPress={() => navigation.navigate('LoginScreen')}>
Log in instead
            </Link>
      </Box>
    </View>
  )
}

export default SignupScreen;
