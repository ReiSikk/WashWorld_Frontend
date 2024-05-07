import React from 'react'
import { Text, Button } from 'native-base'
import { useFocusEffect } from '@react-navigation/native'
import { setCurrentStep } from '../../store/StepSlice'
import { useDispatch } from 'react-redux'
import ProgressSteps from '../../components/ProgressSteps'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../MainNavigation'


type Props = NativeStackScreenProps<RootStackParamList, "OrderSummary">

function OrderSummary({navigation, route}: Props) {
/* const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      // Set the current step to the appropriate number when the screen comes into focus
      dispatch(setCurrentStep(1));
    }, [dispatch])
  ); */

  return (
    <>
      <ProgressSteps currentStep={1} totalSteps={4} />
    <Text>OrderSummary</Text>
    <Button mt="5" bg={'black'} onPress={() => {
navigation.navigate('HomeSubscriptionsScreen')
      }}>
        Change subscription
      </Button>
    <Button mt="5" colorScheme="green" onPress={() => {
navigation.navigate('SelectPaymentMethod')
      }}>
        Add a payment method to continue
      </Button>
    </>
  )
}

export default OrderSummary