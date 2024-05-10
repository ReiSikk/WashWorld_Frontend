import React from 'react'
import { Spacer, Flex, Text, View, Box, HStack, Image, Badge } from 'native-base';


function PartnerDiscountCard() {
  return (
    <View>
        <Flex flexDirection="column" bg="grey5" py="4" px="4" w="100%" h="200">
            <Badge variant="solid" borderRadius="sm" alignSelf="flex-end" px="4" bg="orange">20%</Badge>
            <Box alignSelf="flex-start">
            <Text size="lg" fontWeight="extrabold">Super Tires</Text>
            <Text>Expires in 3 days</Text>
            </Box>
        </Flex>
    </View>
  )
}

export default PartnerDiscountCard