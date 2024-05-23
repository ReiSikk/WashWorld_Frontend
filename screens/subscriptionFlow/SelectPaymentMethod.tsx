import React, { useState } from 'react'
import { View, Text, Button, VStack, ScrollView, Box, Flex } from 'native-base'
import ProgressSteps from '../../components/ProgressSteps'
import PaymentMethodSelector from '../../components/PaymentMethodSelector'
import { AppDispatch, RootState } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { CreateCarDto } from '../../entities/CreateCarDTO'
import { createSubscription } from '../../store/MemberSlice'


function SelectPaymentMethod() {
const dispatch: AppDispatch = useDispatch();
const memberID = useSelector((state: RootState) => state.member.memberID);
const memberCars = useSelector((state: RootState) => state.subscription.cars);
const subscriptionPlanID = useSelector((state: RootState) => state.subscription.selectedSubscription);
//console.log(subscriptionPlanID, "subscriptionPlanID in Select Payment Method")
const paymentMethodID = useSelector((state: RootState) => state.subscription.selectedPaymentMethodID);
//console.log(paymentMethodID, "paymentMethodID in Select Payment Method")
//console.log(memberID, memberCars)


const createCarDtos = memberCars.map(car => ({
  licensePlate: car.licensePlate,
  country: car.country, 
  subscriptionPlanId: subscriptionPlanID,
  paymentCardId: paymentMethodID,
}));
console.log(createCarDtos, "createCarDtos in Select Payment Method")

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
      if (memberID !== null) {
        dispatch(createSubscription({
          memberID: memberID,
          createCarDtos: createCarDtos
        }));
      } else {
        // Handle the case when memberID is null
        console.error('memberID is null');
      }
    }}>
        Continue to payment
      </Button>
    </Box>
    </Flex>
    </>
  )
}

export default SelectPaymentMethod