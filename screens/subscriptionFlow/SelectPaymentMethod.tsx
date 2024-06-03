import React, { useEffect, useState } from 'react'
import { View, Text, Button, VStack, ScrollView, Box, Flex } from 'native-base'
import ProgressSteps from '../../components/ProgressSteps'
import PaymentMethodSelector from '../../components/PaymentMethodSelector'
import { AppDispatch, RootState } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { CreateCarDto } from '../../entities/CreateCarDTO'
import { confirmSubscription, createSubscription } from '../../store/MemberSlice'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../MainNavigation'

type Props = NativeStackScreenProps<RootStackParamList, "SelectPaymentMethod">

function SelectPaymentMethod({route, navigation}: Props) {
const dispatch: AppDispatch = useDispatch();
const memberID = useSelector((state: RootState) => state.member.memberID);
const memberCars = useSelector((state: RootState) => state.subscription.cars);
const subscriptionPlanID = useSelector((state: RootState) => state.subscription.selectedSubscription);

const paymentMethodID = useSelector((state: RootState) => state.subscription.selectedPaymentMethodID)
const subscriptionStatus = useSelector((state: RootState) => state.member.subscriptionStatus);
console.log(subscriptionStatus, "subscriptionStatus in Select Payment Method")


const createCarDtos = memberCars.map(car => ({
  licensePlate: car.licensePlate,
  country: car.country, 
  subscriptionPlanId: subscriptionPlanID,
}));
console.log(createCarDtos, "createCarDtos in Select Payment Method")
useEffect(() => {
  if (subscriptionStatus === 'succeeded') {
    console.log('Subscription confirmed');
    navigation.navigate('PaymentStatus');
  }
}, [subscriptionStatus]);

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
        dispatch(confirmSubscription({
          memberID: memberID,
          createCarDtos: createCarDtos,
          paymentMethodID: paymentMethodID,
        }));
      } else {
        // Handle the case when memberID is null
        console.error('Error fetching member');
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