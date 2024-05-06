import React, { useEffect, useState } from 'react'
import { Text } from 'native-base'
import SubscriptionCard from '../../components/SubscriptionCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../MainNavigation';

type Props = NativeStackScreenProps<RootStackParamList, "HomeSubscriptionsScreen">

type ItemProps = {subscriptionPlanID: number, onPress: () => void};

const Item = ({subscriptionPlanID, onPress}: ItemProps) => (
  <SubscriptionCard onPress={onPress} />
);

function HomeSubscriptionsScreen({ navigation }: Props) {
  const [subscriptionPlans, setSubscriptionPlans] = useState([{id: 1}, {id: 2}, {id: 3}]);

  return (
    <>
      <Text>Map all subscription plans as cards down here</Text>
      {subscriptionPlans.map(plan => (
        <Item 
          key={plan.id} 
          subscriptionPlanID={plan.id} 
          onPress={() => navigation.navigate('PlanOverview', {subscriptionPlanID: plan.id})}
        />
      ))}
    </>
  )
}

export default HomeSubscriptionsScreen