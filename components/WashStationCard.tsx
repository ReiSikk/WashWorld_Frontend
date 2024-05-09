import React from 'react'
import { Spacer, Flex, Text, View, Box, HStack, VStack, Container } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";

interface WashStationCardProps {
    name: string;
    address: string;
    onPress?: () => void;
  }

function WashStationCard({ name, address, onPress }: WashStationCardProps) {
  return (
<TouchableOpacity onPress={onPress}>
    <View>
      <Flex flexDirection="row" bg="grey5" py="4" px="4" w="100%" alignItems="center">
        <Box>
          <VStack mb="4">
          <Text size="lg" fontWeight="extrabold">{name}</Text>
          <Text size="xs">2.2 km</Text>
          </VStack>
          <VStack space={2}>
    <HStack space={2}>
    <Ionicons name="location-outline" size={24} color="black" />
          <Text>{address}</Text>
          </HStack>
          <HStack>
          <Ionicons name="time-outline" size={24} color="black" />
    <Text color="greenWhite" ml="2">Open</Text>
          <Text> - 24/7</Text>
          </HStack>
          </VStack>
          </Box>
        <Spacer />
          <AntDesign name="right" size={24} />
      </Flex>
    </View>
    </TouchableOpacity>
  )
}

export default WashStationCard