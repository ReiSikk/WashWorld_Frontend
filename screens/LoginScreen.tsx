import React from "react";
import { Container, useTheme, Button, ICustomTheme, Center, Box, FormControl, Input, Stack, Link, Heading } from "native-base";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { useState, useEffect } from "react";
import { login, setToken, checkTokenValidity} from "../store/MemberSlice";
import * as SecureStore from'expo-secure-store';


type Props = NativeStackScreenProps<RootStackParamList, "LoginScreen">


function LoginScreen({ navigation }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
});

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [errors, setErrors] = useState<{ email?: string; password?: string }>({});



const validate = () => {
  const newErrors: { email?: string; password?: string } = {};
  let valid = true;

  if (loginForm.email === '') {
    newErrors.email = 'Please enter your email';
    valid = false;
    //the redux below expects a string with a following pattern 'something + @ + something + . + something'
  } else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {
    newErrors.email = 'Please enter a valid email address';
    valid = false;
  }
  if (loginForm.password.length < 3) {
    newErrors.password = 'Password must be at least 3 characters long';
    valid = false;
  }

  setErrors(newErrors);
  return valid;
};



  const handleLogin = async () => {
    //validate() ? console.log('Submitted') : console.log('Validation Failed');

      const response = await dispatch(login({email, password}))
      if (response && response.payload && response.payload.access_token) {
        console.log(response.payload.access_token, "response in login screen")
        dispatch(setToken(response.payload.access_token))
        dispatch(checkTokenValidity())
      } else {
        alert(response.payload.message)
      }
 }

  return (
    <View>
      <Box safeArea p="10" py="8">
        <Box w="100%" maxWidth="300px">
        <Heading size="lg" fontWeight="600" color="black" py="4">
          Log in
        </Heading>
          <FormControl isRequired isInvalid={'email' in errors}>
              <FormControl.Label>E-mail</FormControl.Label>
              <Input type="text" placeholder="Your email" autoCapitalize="none" onChangeText={setEmail} />
            {'email' in errors && <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>}
          </FormControl>
        </Box>

        <Box w="100%" maxWidth="300px">
          <FormControl isRequired isInvalid={'password' in errors}>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" placeholder="Password" onChangeText={setPassword} />
      {'password' in errors && <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>}
          </FormControl>
          <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "grey60"
          }} alignSelf="flex-start" mt="2">
              Forget Password?
            </Link>
        </Box>
      </Box>

      <Box alignItems="center">
        <Button w="80%" maxWidth="300px" onPress={handleLogin}>Log in</Button>
      </Box>
      <Box alignItems="center">
      <Link _text={{
            fontSize: "sm",
            fontWeight: "500",
            color: "black"
          }} alignSelf="center" mt="1" py="6" onPress={() => navigation.navigate('SignupScreen')}>
              I don't have an account - Sign Up
            </Link>
      </Box>
    </View>
  )
}


export default LoginScreen;
