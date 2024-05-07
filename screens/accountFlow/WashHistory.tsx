import React from 'react'
import { Container, Text, View, useTheme, Button, Input, Box, Heading, Link, Flex, VStack} from 'native-base';
import  { StyleSheet} from 'react-native';
import WashHistoryCard from '../../components/WashHistoryCard';


function WashHistory() {

  const washHistoryData = [
    { id: 1, washStation: 'Wash World Lyngby', washType: 'Basic Wash' },
    { id: 2, washStation: 'Wash World Soborg', washType: 'Basic Wash' },
    { id: 3, washStation: 'Wash World Amager', washType: 'Basic Wash' }
  ];

  return (
   <View m="6">
  <Text size="xl" mb="2" fontWeight="extrabold">Wash history</Text>
  <Flex flexDirection="row" mb={8}>
  <Text mb="2">Last wash at WashWorld: </Text>
  <Text mb="2" color="greenWhite" fontWeight="extrabold">01/05/2024</Text>
  </Flex>
  <VStack space={4}>
  <Text size="lg" fontWeight="extrabold">History</Text>
  {washHistoryData.map(wash => (
          <WashHistoryCard
            key={wash.id}
            washStation={wash.washStation}
            washType={wash.washType}
          />
        ))}
  </VStack>
   </View>
  )
}

export default WashHistory