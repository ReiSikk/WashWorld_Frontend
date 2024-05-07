import React from 'react'
import { Text, View, Box, Button, Flex, VStack, ScrollView } from 'native-base'
import TitleCard from '../components/TitleCard'
import MembershipCard from '../components/MembershipCardComponents'
import { RootStackParamList } from './MainNavigation';

function AccountScreen() {

  return (
    <ScrollView m="6">
      <MembershipCard />
      <VStack space={4}>
<TitleCard title="Wallet"/>
<TitleCard title="Wash History"/>
<TitleCard title="FAQ & Feedback"/>
<TitleCard title="Contact"/>
<TitleCard title="App settings"/>
</VStack>
    </ScrollView>
  )
}

export default AccountScreen