import React from 'react'
import { View, Text, Button, VStack, ScrollView, Box } from 'native-base'
import ProgressSteps from '../../components/ProgressSteps'
import PaymentMethodSelector from '../../components/PaymentMethodSelector'
function SelectPaymentMethod() {
  return (
    <>
    <VStack space={4} m={6}>
    <ProgressSteps currentStep={2} totalSteps={4} />
    <ScrollView>
    <PaymentMethodSelector />
      </ScrollView>
      </VStack>
      <Box bottom={0} mt={'auto'} ml={6} mr={6} mb={6}>
    <Button mt="5" colorScheme="green" onPress={() => {
      console.log('Continue to payment presses, render payment success view')
      }}>
        Continue to payment
      </Button>
    </Box>
    </>
  )
}

export default SelectPaymentMethod