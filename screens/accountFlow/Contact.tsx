import React from 'react'
import { Text, View, Box, Flex } from 'native-base'
import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../MainNavigation';

type Props = NativeStackScreenProps<RootStackParamList, "Contact">

function Contact({ navigation }: Props) {
  return (
    <View m="6">
      <Box mb="8">
<Text size="xl" mb="2" fontWeight="extrabold">Contact us</Text>
<Text mb="4">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</Text>
<Flex flexDirection="row" alignItems="center">
<AntDesign name="clockcircleo" size={24} color="black" />
<Text size="md" px="2">Available - 24/7</Text>
</Flex>
</Box>
<Text></Text>
<Box mb="8">
<Text size="lg" fontWeight="extrabold">Call us</Text>
<Text mb="4">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</Text>
<Flex flexDirection="row" alignItems="center">
<AntDesign name="phone" size={24} color="black" />
<Text size="lg" fontWeight="extrabold" px="2">+45 783 383 363</Text>
</Flex>
</Box>
<Text size="lg" fontWeight="extrabold">Chat</Text>
<Text>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</Text>
</View>
  )
}

export default Contact