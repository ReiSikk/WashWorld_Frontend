import React, { useEffect } from 'react';
import { Container, Text, View, useTheme, Button, Input, Box, Heading, Link, Flex} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';
import { setToken } from '../store/MemberSlice';
import { useDispatch } from 'react-redux';
import * as SecureStore from'expo-secure-store';
import { AppDispatch, RootState } from '../store/store';




type Props = NativeStackScreenProps<RootStackParamList, "WelcomeScreen">

function WelcomeScreen({ navigation }: Props) {
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    async function readFromSecureStore() {
        const token = await SecureStore.getItemAsync('token');
        token && dispatch(setToken(token))
    }
    readFromSecureStore();
  }, [])


  return (
<View>
  <Flex safeArea justifyContent="center" h="100%" bg="black">
      <Box alignItems="center">
        <Heading size="xl" fontWeight="extrabold" color="white">
          WashWorld
        </Heading>
        <Button onPress={() => navigation.navigate('SignupScreen')} w="80%" maxWidth="300px" bg="greenBlack" mt="8" mb="4" _text={{
            fontWeight: "extrabold",
          }}>Sign up</Button>
      </Box>
      <Link _text={{
            fontSize: "sm",
            color: "white"
          }} alignSelf="center" onPress={() => navigation.navigate('LoginScreen')}>
Have an account? Log in instead
            </Link>
      </Flex>
    </View>
  );
}

export default WelcomeScreen;