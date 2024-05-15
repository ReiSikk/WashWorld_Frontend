import React from 'react';
import { Container, Text, View, useTheme, Button, Input, Box, Heading, Link, Flex} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';

type Props = NativeStackScreenProps<RootStackParamList, "WelcomeScreen">

function WelcomeScreen({ navigation }: Props) {


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