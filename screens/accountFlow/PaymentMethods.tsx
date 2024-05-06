import React from 'react'
import { Container, Text, View, useTheme, Button, Input, Box, Heading, Link, Flex, VStack} from 'native-base';
import  { StyleSheet} from 'react-native';
import WashHistoryCard from '../../components/WashHistoryCard';
import TitleCardPlus from '../../components/TitleCardPlus';
import PaymentCard from '../../components/PaymentCard';


function PaymentMethods() {
  return (
    <View m="6">
    <Text size="xl" mb="2" fontWeight="extrabold">Wallet</Text>
    <Flex flexDirection="row" mb={8}>
    <Text mb="2">Next time your card is charged: </Text>
    <Text mb="2" color="greenWhite" fontWeight="extrabold">01/05/2024</Text>
    </Flex>
    <VStack space={4}>
    <Text size="lg" fontWeight="extrabold">My payment methods</Text>
    <PaymentCard cardNumber="1234 1234 1234 1234"/>
    <Flex flexDirection="row" bg="grey5" py="4" px="4" w="100%" alignItems="center">
        <Box>
          <Text>Apple Pay</Text>
        </Box>
      </Flex>
      <Flex flexDirection="row" bg="grey5" py="4" px="4" w="100%" alignItems="center">
        <Box>
          <Text>MobilePay</Text>
        </Box>
      </Flex>
      <TitleCardPlus title="Add a card"></TitleCardPlus>
    </VStack>
     </View>
  )
}

export default PaymentMethods