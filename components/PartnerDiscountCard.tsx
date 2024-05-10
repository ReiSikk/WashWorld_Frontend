import React from 'react'
import { Spacer, Flex, Text, View, Box, HStack, Image, Badge } from 'native-base';


function PartnerDiscountCard() {
  return (
    <View>
        <Flex flexDirection="column" w="100%">
        <Image source={require('../assets/images/tire_picture.png')} alt="image"/>
            <Badge variant="solid" borderRadius="sm" px="4" py="2" bg="orange" position="absolute" top="3" right="3">20%</Badge>
            <Box position="absolute" bottom="2" left="2">
            <Text color="white" size="lg" fontWeight="extrabold">Super Tires</Text>
            <Text color="white">Expires in 3 days</Text>
            </Box>
        </Flex>
    </View>
  )
}

export default PartnerDiscountCard