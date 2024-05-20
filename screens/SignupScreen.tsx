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

  

  const handleSignup = () => {

    console.log(form)


const newMember: createMemberDTO = {
  email: form.email,
  password: form.password,
  firstName: form.firstName,
  lastName: form.lastName,
  phone: form.phone,
};

    dispatch(signup(newMember))
    .then(() => {
    navigation.navigate('LoginScreen')
  })
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
              <Input type="text" placeholder="Your email" autoCapitalize="none" onChangeText={value => setForm({ ...form, email: value })} />
          </FormControl>
          <FormControl isRequired>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" placeholder="Choose a password" onChangeText={value => setForm({ ...form,
        password: value
      })} />
          </FormControl>
          <FormControl isRequired>
              <FormControl.Label>First name</FormControl.Label>
              <Input type="text" placeholder="Your first name" onChangeText={value => setForm({ ...form,
        firstName: value
      })} />
          </FormControl>
          <FormControl isRequired>
              <FormControl.Label>Last name</FormControl.Label>
              <Input type="text" placeholder="Your last name" onChangeText={value => setForm({ ...form,
        lastName: value
      })}/>
          </FormControl>
          <FormControl isRequired>
              <FormControl.Label>Phone number</FormControl.Label>
              <Input type="text" placeholder="Your phone number" onChangeText={value => setForm({ ...form,
        phone: value
      })} />
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
