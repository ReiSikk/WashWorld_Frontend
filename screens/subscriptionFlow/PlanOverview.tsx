import React from 'react'
import { Text } from 'native-base'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../MainNavigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';


type Props = NativeStackScreenProps<RootStackParamList, "PlanOverview">


function PlanOverview({route, navigation}: Props) {
  const { subscriptionPlanID } = route.params;
  const dispatch: AppDispatch = useDispatch();
  const subscriptions = useSelector((state: RootState) => state.subscription.subscriptions[subscriptionPlanID]);
   // Get the subscriptionPlanID from the navigation parameters


  

  
    console.log(subscriptionPlanID, "subscriptionPlanID");


  return (
    <>
          <Text>{subscriptions ? subscriptions.name : 'Subscription plan not found'}</Text>
    </>
  )
}

export default PlanOverview