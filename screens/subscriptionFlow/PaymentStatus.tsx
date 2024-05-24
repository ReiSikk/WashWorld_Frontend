import React from 'react'
import { VStack, Text, HStack, Button } from 'native-base'
import ProgressSteps from '../../components/ProgressSteps'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../MainNavigation';

type Props = NativeStackScreenProps<RootStackParamList, "PaymentStatus">

function PaymentStatus({route, navigation}: Props) {
  return (
    <>
    <VStack space={4} m="6">
    <ProgressSteps currentStep={3} totalSteps={4} />
    </VStack>
 <VStack space={4} m="6">
 <Text size={'xl'} fontWeight={'extrabold'}>
   Sucessfully added subscription!
 </Text>
 </VStack>
 <VStack space={4} m="6" bottom={0} marginTop={'auto'}>
 <Button mt="0" colorScheme="green" onPress={() => {
navigation.navigate('SelectPaymentMethod')
   }}>
     Add a payment method to continue
   </Button>
 </VStack>
 </>
  )
}

export default PaymentStatus