import React from 'react'
import { Text, View, Box, Button, Flex, VStack, ScrollView } from 'native-base'
import TitleCard from '../components/TitleCard'
import MembershipCard from '../components/MembershipCardComponents'
import { RootStackParamList } from './MainNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, "AccountScreen">

function AccountScreen({ navigation }: Props) {

  return (
    <ScrollView m="6">
      <MembershipCard />
      <VStack space={4}>
<TitleCard title="Wallet" onPress={() => navigation.navigate('PaymentMethods')} />
<TitleCard title="Wash History" onPress={() => navigation.navigate('WashHistory')}/>
<TitleCard title="FAQ & Feedback " onPress={() => navigation.navigate('FAQ')}/>
<TitleCard title="Contact" onPress={() => navigation.navigate('Contact')}/>
<TitleCard title="App settings" onPress={() => navigation.navigate('Settings')}/>
</VStack>
    </ScrollView>
  )
}

export default AccountScreen