import React from 'react'
import { View, Text, Button, VStack, ScrollView, Box, Flex } from 'native-base'
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
      <Flex  flexDirection="row" mt={'auto'} px={0} bg={'white'} width={"100%"} h={"10%"}  justifyContent="center" alignItems={'center'}>


      <Box>
    <Button width={"100%"} colorScheme="green" onPress={() => {
      console.log('Continue to payment presses, render payment success view')
    }}>
        Continue to payment
      </Button>
    </Box>
    </Flex>
    </>
  )
}

export default SelectPaymentMethod