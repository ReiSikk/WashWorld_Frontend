import React from 'react'
import { Text } from 'native-base'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../MainNavigation';

type Props = NativeStackScreenProps<RootStackParamList, "PlanOverview">


function PlanOverview({route, navigation}: Props) {

    // Get the subscriptionPlanID from the navigation parameters
    const { subscriptionPlanID } = route.params;


  return (
    <>
  <Text>{subscriptionPlanID}</Text>
    </>
  )
}

export default PlanOverview