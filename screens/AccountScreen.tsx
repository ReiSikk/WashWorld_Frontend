import React from 'react'
import { Text, View, Box, Button, Flex, VStack } from 'native-base'
import TitleCard from '../components/TitleCard'

function AccountScreen() {
  return (
    <View m="6">
      <VStack space={4}>
<TitleCard title="Wallet"/>
<TitleCard title="Wash History"/>
<TitleCard title="FAQ & Feedback"/>
<TitleCard title="Contact"/>
<TitleCard title="App settings"/>
</VStack>
    </View>
  )
}

export default AccountScreen