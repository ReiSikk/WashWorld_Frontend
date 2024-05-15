import React from "react";
import { useState } from "react";
import { Container, useTheme, Button, ICustomTheme, Center, Box, FormControl, Input, Stack, Link, Heading, Checkbox, HStack } from "native-base";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

type Props = NativeStackScreenProps<RootStackParamList, "SignupScreen">

function SignupScreen({ navigation }: Props) {

  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
//set up redux

    //dispatch(signup({email, password, firstName, lastName, phone,}));
   // .then(() => {
   //     setIsLoggedIn(true);
   // })

}

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
          <FormControl isRequired>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" placeholder="Choose a password" />
          </FormControl>
          <FormControl isRequired>
              <FormControl.Label>First name</FormControl.Label>
              <Input type="text" placeholder="Your first name" />
          </FormControl>
          <FormControl isRequired>
              <FormControl.Label>Last name</FormControl.Label>
              <Input type="text" placeholder="Your last name" />
          </FormControl>
          <FormControl isRequired>
              <FormControl.Label>Phone number</FormControl.Label>
              <Input type="text" placeholder="Your phone number" />
          </FormControl>
        </Box>
        </Box>
    <Box alignItems="center" >
        <Button w="80%" maxWidth="300px" onPress={handleSignup}>Sign up</Button>
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
