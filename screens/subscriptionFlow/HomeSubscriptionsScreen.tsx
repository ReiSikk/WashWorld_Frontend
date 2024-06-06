import React, { useEffect, useState } from 'react'
import { HStack, ScrollView, Text, Button, Pressable, Box } from 'native-base'
import SubscriptionCard from '../../components/SubscriptionCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../MainNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubscriptions } from '../../store/SubscriptionSlice';
import { AppDispatch, RootState } from '../../store/store';
import { Subscription } from '../../entities/subscription';
import { VStack, FlatList, View } from 'native-base';
import { Touchable, TouchableOpacity } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, "HomeSubscriptionsScreen">

type ItemProps = { plan: Subscription, onPress: () => void };

const Item = ({plan, onPress}: ItemProps) => (
  <SubscriptionCard plan={plan} onPress={onPress} />
);

function HomeSubscriptionsScreen({ navigation }: Props) {
  const dispatch: AppDispatch = useDispatch();
  const subscriptions = useSelector((state: RootState) => state.subscription.subscriptions);
  const [subscriptionType, setSubscriptionType] = useState('Subscription');

  const [selectedPlan, setSelectedPlan] = useState<number | undefined>(undefined);

  // Fetch the subscription plans when the component mounts
  useEffect(() => {
    dispatch(fetchSubscriptions());
  }, [dispatch]);

  const handleTabChange = (type: string) => {
    setSubscriptionType(type);
    if (type === 'Subscription' && selectedPlan) {
    } 
    const payByPlatePlan = subscriptions.find(plan => plan.name === "Pay by Plate");
    if (type === 'PayByPlate' && payByPlatePlan){
      setSelectedPlan(payByPlatePlan.id);
      navigation.navigate('PlanOverview', {subscriptionPlanID: payByPlatePlan.id-1});
    }
  }

  const handleItemPress = (plan:any) => {
    setSelectedPlan(plan.id);
    navigation.navigate('PlanOverview', { subscriptionPlanID: plan.id-1 });
  }
  const filteredSubscriptions = subscriptions.filter(plan => plan.name !== 'Pay by Plate');

  return (
    <>
    <HStack justifyContent="center" mt={4} p={3} maxHeight={'10%'} space={1} alignItems='center'>
    <Pressable onPress={() => handleTabChange('Subscription')} flex={1}>
      <Box backgroundColor={'greenWhite'} padding={2} h="100%" alignItems={'center'} justifyContent={'center'}>
        <Text color={'white'} fontFamily={'extrabold'}>Subscription</Text>
      </Box>
    </Pressable>
    <Pressable onPress={() => handleTabChange('PayByPlate')} flex={1}>
      <Box backgroundColor={'grey10'} padding={2} h="100%" alignItems={'center'} justifyContent={'center'}>
        <Text fontFamily={'extrabold'}>Pay by Plate</Text>
      </Box>
    </Pressable>
</HStack>
    <FlatList
      data={filteredSubscriptions}
      keyExtractor={(plan) => plan.id.toString()}
      renderItem={({ item: plan }) => (
        <Item 
          plan={plan}
          onPress={() => handleItemPress(plan)}/>
      )}
      contentContainerStyle={{ margin: 12, paddingBottom: 35}}
      ItemSeparatorComponent={() => <View style={{ height: 12 }} />} 
    />
    </>
  )
}

export default HomeSubscriptionsScreen