import React from 'react'
import { View, Text, Button, VStack } from 'native-base'
import ProgressSteps from '../../components/ProgressSteps'
import PaymentMethodSelector from '../../components/PaymentMethodSelector'
function SelectPaymentMethod() {
  return (
    <>
    <VStack space={4} m={6}>
    <ProgressSteps currentStep={2} totalSteps={4} />
    <PaymentMethodSelector />
    <Text>Here we dynamically render the subscription success view</Text>
    <Text>And the How it Works section after the succes view</Text>
    <Button mt="5" colorScheme="green" onPress={() => {
      console.log('Continue to payment presses, render payment success view')
      }}>
        Continue to payment
      </Button>
      </VStack>
    </>
  )
}

export default SelectPaymentMethod