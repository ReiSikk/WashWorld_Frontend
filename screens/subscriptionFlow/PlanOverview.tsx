import React from 'react'
import { Text, VStack, Checkbox, Box, HStack, Button, ScrollView } from 'native-base'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../MainNavigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { AntDesign } from '@expo/vector-icons';
import { selectSubscription } from '../../store/SubscriptionSlice';
import { Subscription } from '../../entities/subscription';


type Props = NativeStackScreenProps<RootStackParamList, "PlanOverview">


function PlanOverview({route, navigation}: Props) {
  const { subscriptionPlanID } = route.params;
  const dispatch: AppDispatch = useDispatch();
  const subscription = useSelector((state: RootState) => state.subscription.subscriptions[subscriptionPlanID]);

  const handleConfirm = (subscription: Subscription) => {
    dispatch(selectSubscription(subscription));
  };



  return (
    <>
        <ScrollView>
          <VStack space={4} m="6">
                <Text  size={'xl'} fontWeight={'extrabold'}>
                  Plan Overview
                </Text>
                <Box p="4" rounded="md">
                    <Text color="greenWhite" fontSize="2xl" fontWeight={'extrabold'}>
                    {subscription ? subscription.name : 'Subscription plan not found'}
                    </Text>
                    <HStack space={2} alignItems="baseline">
                    <Text color="black" fontSize="5xl" fontWeight={'extrabold'}>
                        {subscription ? subscription.price_per_month_kr : 'Subscription price not found'} 
                    </Text>
                    <Text color="black" fontSize={'lg'} fontWeight={'extrabold'}>kr./md.</Text>
                    </HStack>
                    <Text color="black">
                        Eller prøv en enkeltvask til 89 kr.
                    </Text>
                </Box>
                <VStack space={2} marginBottom={6}>
                    {[
                        'Shampoo',
                        'Børstevask',
                        'Hjulvask',
                        'Undervegnsskyl*',
                        'Insektrens',
                        'Foam Splash',
                        'Tørring',
                        'Højtryksskyl',
                        'Skyllevoks',
                        'Polering',
                        'Affedtning',
                        'Ekstra tørring'
                    ].map(service => (
                        <HStack key={service} space={2} alignItems="center">
                          <AntDesign name="check" size={24} color="green" /> 
                            <Text flex={1}>{service}</Text>
                        </HStack>
                    ))}
                </VStack>
                <Text color={'grey80'}>
                    Oprettelse 99 kr. uden binding
                </Text>
                <Text italic color={'grey80'} marginBottom={4}>
                    *Gratis tilvalg ved vaskehallen
                </Text>
                <Text color={'grey60'} underline fontWeight={'extrabold'}>
                  Læs mere
                </Text>
            <Button  mt={10}colorScheme="green" position={'sticky'} 
            onPress={() => {
              dispatch(selectSubscription(subscription.id));
              navigation.navigate('EnterLicensePlate', { subscriptionPlanID: subscription.id });
            }}>
                    Confirm
            </Button>
           </VStack>
        </ScrollView>
    </>
  )
}

export default PlanOverview