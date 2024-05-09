import React from 'react'
import { Text, View, Box, Button, Flex, VStack, ScrollView, HStack } from 'native-base'
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";

function Location() {
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
    <Text>See more car washes in Copenhagen here.</Text>
</View>
  )
}

export default Location