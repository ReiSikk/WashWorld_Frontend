import React from 'react'
import { Text, View, ScrollView, HStack } from 'native-base'
import PartnerDiscountCard from '../components/PartnerDiscountCard'


function RewardsScreen() {
  return (
    <ScrollView mx="6">
    <Text size="xl" fontWeight="extrabold" mt="6">Collect rewards</Text>
    <HStack space={4} mt="4">
    <PartnerDiscountCard />
    </HStack>
    </ScrollView>
  )
}

export default RewardsScreen