import React from "react";
import { useState } from "react";
import { Container, useTheme, Button, ICustomTheme, Center, Box, FormControl, Input, Stack, Link, Heading, Checkbox, HStack } from "native-base";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { signup } from "../store/MemberSlice";
import { createMemberDTO } from "../entities/CreateMemberDTO";

type Props = NativeStackScreenProps<RootStackParamList, "SignupScreen">

function SignupScreen({ navigation }: Props) {

  const dispatch = useDispatch<AppDispatch>();
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
});

const [errors, setErrors] = useState<{ email?: string; password?: string; firstName?: string; lastName?: string; phone?: string }>({});

const validate = () => {
  const newErrors: { email?: string; password?: string; firstName?: string; lastName?: string; phone?: string } = {};
  let valid = true;

  if (form.email === '') {
    newErrors.email = 'Please enter your email';
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    newErrors.email = 'Please enter a valid email address';
    valid = false;
  }

  if (form.password.length < 8) {
    newErrors.password = 'Password must be at least 8 characters long';
    valid = false;
  }

  if (form.firstName.length < 2) {
    newErrors.firstName = 'First name must be at least 2 characters long';
    valid = false;
  }

  if (form.lastName.length < 2) {
    newErrors.lastName = 'Last name must be at least 2 characters long';
    valid = false;
  }

  if (form.phone.length < 5) {
    newErrors.phone = 'Phone number must be at least 5 characters long';
    valid = false;
  } else if (!/^\+?\d+$/.test(form.phone)) {
    newErrors.phone = 'Phone number can contain only numbers and a plus sign';
    valid = false;
  }

  setErrors(newErrors);
  return valid;
};

const handleEmailChange = (value: string) => {
  setForm({ ...form, email: value });
  if (errors.email) validate();
};

const handlePasswordChange = (value: string) => {
  setForm({ ...form, password: value });
  if (errors.password) validate();
};

const handleFirstNameChange = (value: string) => {
  setForm({ ...form, firstName: value });
  if (errors.firstName) validate();
};

const handleLastNameChange = (value: string) => {
  setForm({ ...form, lastName: value });
  if (errors.lastName) validate();
};

const handlePhoneChange = (value: string) => {
  setForm({ ...form, phone: value });
  if (errors.phone) validate();
};




  const handleSignup = () => {
    if (validate()) {


 const newMember: createMemberDTO = {
  email: form.email,
  password: form.password,
  firstName: form.firstName,
  lastName: form.lastName,
  phone: form.phone,
};

    dispatch(signup(newMember))
    .then((response) => {
      if (!response.payload.error) {
        navigation.navigate('LoginScreen');
    } else {
      alert(response.payload.message)
      }}) 
    }
}

  return (

    <View>
      <Box safeArea p="10" py="8">
        <Box w="100%" maxWidth="300px">
        <Heading size="lg" fontWeight="600" color="black" py="4">
          Sign up
        </Heading>
        <FormControl isRequired isInvalid={'email' in errors}>
              <FormControl.Label>E-mail</FormControl.Label>
              <Input type="text" placeholder="Your email" autoCapitalize="none" onChangeText={handleEmailChange} />
              {'email' in errors && <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>}
          </FormControl>
          <FormControl isRequired isInvalid={'password' in errors}>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" placeholder="Choose a password" onChangeText={handlePasswordChange} />
              {'password' in errors && <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>}
          </FormControl>
          <FormControl isRequired isInvalid={'firstName' in errors}>
              <FormControl.Label>First name</FormControl.Label>
              <Input type="text" placeholder="Your first name" onChangeText={handleFirstNameChange} />
              {'firstName' in errors && <FormControl.ErrorMessage>{errors.firstName}</FormControl.ErrorMessage>}
          </FormControl>
          <FormControl isRequired isInvalid={'lastName' in errors}>
              <FormControl.Label>Last name</FormControl.Label>
              <Input type="text" placeholder="Your last name" onChangeText={handleLastNameChange}/>
              {'lastName' in errors && <FormControl.ErrorMessage>{errors.lastName}</FormControl.ErrorMessage>}
          </FormControl>
          <FormControl isRequired isInvalid={'phone' in errors}>
              <FormControl.Label>Phone number</FormControl.Label>
              <Input type="text" placeholder="Your phone number" onChangeText={handlePhoneChange} />
              {'phone' in errors && <FormControl.ErrorMessage>{errors.phone}</FormControl.ErrorMessage>}
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
