import React from 'react'
import { Container, Text, View, useTheme, Button, Input, Box, Heading, Link, Flex, VStack} from 'native-base';
import  { StyleSheet} from 'react-native';
import WashHistoryCard from '../../components/WashHistoryCard';
import TitleCardPlus from '../../components/TitleCardPlus';
import PaymentCard from '../../components/PaymentCard';
import PaymentMethodSelector from '../../components/PaymentMethodSelector';


function PaymentMethods() {
  return (
    <View m="6">
    <Flex flexDirection="row" mb={8}>
    <Text mb="2" fontFamily={'medium'}>Next time your card is charged: </Text>
    <Text mb="2" color="greenWhite" fontWeight="extrabold">01/05/2024</Text>
    </Flex>
    <PaymentMethodSelector />
     </View>
  )
}

export default PaymentMethods