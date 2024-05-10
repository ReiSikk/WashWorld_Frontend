import React from 'react'
import { Text, View, Box, Button, Flex, VStack, ScrollView, HStack, Badge } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Divider } from 'native-base';
import LocationsScreen from '../LocationsScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../MainNavigation';



type Props = NativeStackScreenProps<RootStackParamList, "Location">


function Location({ navigation }: Props) {


  return (
<View mx="6">
    <Text mt="6" mb="4" size="xl" fontWeight="extrabold">Søborg - Dynamovej</Text>
    <VStack mb="8" space={2}>
    <HStack space={2}>
    <Ionicons name="location-outline" size={24} color="black" />
          <Text>adress</Text>
          </HStack>
          <HStack>
          <Ionicons name="time-outline" size={24} color="black" />
    <Text color="greenWhite" ml="2">Open</Text>
          <Text> - 24/7</Text>
          </HStack>
          <HStack space={2}>
          <Ionicons name="map-outline" size={24} color="black" />
          <Text>2.2 km</Text>
          </HStack>
          </VStack>
         <VStack>
<Text>Max height: 2.6m</Text>
<Text>Side mirror to side mirror: 2.55m</Text>
<Text>Max wheel width: 2.15m</Text>
</VStack>

    <Button my="4">Get directions</Button>
    <Flex flexDirection="row">
    <Text>See more car washes in Copenhagen </Text>
    <TouchableOpacity onPress={() => navigation.navigate('LocationsScreen')}>
    <Text color="greenWhite">here.</Text>
    </TouchableOpacity>
    </Flex>
    <Divider my="2" _light={{
        bg: "grey10"
      }} _dark={{
        bg: "grey10"
      }} />


      <Text size="lg" fontWeight="extrabold" mb="2">Wash bays</Text>
      <VStack space={4} mb="8">
      <HStack space={4}>
      <Text>Wash-bay 1</Text>
      <Badge variant="solid" borderRadius="sm" alignSelf="flex-start" px="4" bg="greenWhite">Available</Badge>
      </HStack>
     
      <HStack space={4}>
  
      <Text>Wash-bay 2</Text>
      <Badge variant="solid" borderRadius="sm" alignSelf="flex-start" px="4" bg="orange">Not available</Badge>
      </HStack>
      </VStack>
      <Text size="lg" fontWeight="extrabold" mb="2">Self-wash</Text>
      <VStack space={4}>
      <HStack space={4}>
      <Text>Self-wash 1</Text>
      <Badge variant="solid" borderRadius="sm" alignSelf="flex-start" px="4" bg="greenWhite">Available</Badge>
      </HStack>
     
      <HStack space={4}>
  
      <Text>Self-wash 2</Text>
      <Badge variant="solid" borderRadius="sm" alignSelf="flex-start" px="4" bg="orange">Not available</Badge>
      </HStack>
      </VStack>
      

</View>
  )
}

export default Location