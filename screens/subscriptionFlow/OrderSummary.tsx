import React from 'react'
import { Text, Button, Box, VStack, HStack } from 'native-base'
import { useFocusEffect } from '@react-navigation/native'
import { setCurrentStep } from '../../store/StepSlice'
import { useDispatch } from 'react-redux'
import ProgressSteps from '../../components/ProgressSteps'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../MainNavigation'
import SubscriptionCard from '../../components/SubscriptionCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { AppDispatch } from '../../store/store'
import { FontAwesome5 } from '@expo/vector-icons';


type Props = NativeStackScreenProps<RootStackParamList, "OrderSummary">

function OrderSummary({navigation, route}: Props) {
  const { subscriptionPlanID } = route.params;
  const subscription = useSelector((state: RootState) => state.subscription.subscriptions[subscriptionPlanID-1]);
  const dispatch: AppDispatch = useDispatch();
  const cars = useSelector((state: RootState) => state.subscription.cars);


  return (
    <>
       <VStack space={4} m="6">
       <ProgressSteps currentStep={1} totalSteps={4} />
       </VStack>
    <VStack space={4} m="6">
    <Text size={'xl'} fontWeight={'extrabold'}>
      Order Summary
    </Text>
    <SubscriptionCard plan={subscription} onPress={() => null} />
    <Text>
      Your cars
    </Text>
    {cars.map((car, index) => (
      <HStack key={index} p="4" bg="grey10" alignItems={'center'} justifyContent={'flex-start'} space={4}>
        <FontAwesome5 name="car" size={24} color="black" />
        <Text color="black" fontSize="2xl" fontWeight={'extrabold'}>
          {car.plateNumber} {car.country}
        </Text>
      </HStack>
    ))}
    </VStack>
    <VStack space={4} m="6" bottom={0} marginTop={'auto'}>
    <Button mt="0" bg={'black'} onPress={() => {
navigation.navigate('HomeSubscriptionsScreen')
      }}>
        Change subscription
      </Button>
    <Button mt="0" colorScheme="green" onPress={() => {
navigation.navigate('SelectPaymentMethod')
      }}>
        Add a payment method to continue
      </Button>
    </VStack>
    </>

  )
}

export default OrderSummary