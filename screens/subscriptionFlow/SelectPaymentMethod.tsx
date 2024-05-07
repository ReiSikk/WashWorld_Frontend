import React from 'react'
import { View, Text, Button } from 'native-base'
import ProgressSteps from '../../components/ProgressSteps'
function SelectPaymentMethod() {
  return (
    <>
    <ProgressSteps currentStep={2} totalSteps={4} />
    <Text>SelectPaymentMethod</Text>
    <Text>Here we dynamically render the subscription success view</Text>
    <Text>And the How it Works section after the succes view</Text>
    <Button mt="5" colorScheme="green" onPress={() => {
      console.log('Continue to payment presses, render payment success view')
      }}>
        Continue to payment
      </Button>
    </>
  )
}

export default SelectPaymentMethod