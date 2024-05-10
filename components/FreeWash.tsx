import React from 'react'
import { Text, View, HStack, Badge, Container, Flex, Box, Progress  } from 'native-base';

function FreeWash() {
  return (
<View>
<Box w="100%" h="150" bg="black" borderRadius="sm">
    <Flex m="4">
    <Text fontWeight="extrabold" color="white">Get every 10th wash for free* </Text>
    <Text size="sm" color="white">*For Pay by Plate clients </Text>
<Progress bg="grey5" _filledTrack={{
        bg: "greenBlack"
      }} value={80} my="4" />
      <Text alignSelf="flex-end" color="white" fontWeight="extrabold">8/10</Text>
        </Flex>
</Box>
</View>
  )
}

export default FreeWash