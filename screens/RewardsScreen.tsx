import React from 'react'
import { Text, View, ScrollView, HStack } from 'native-base'
import PartnerDiscountCard from '../components/PartnerDiscountCard'
import FreeWash from '../components/FreeWash'

function RewardsScreen() {
  return (
    <View mx="6">
    <Text size="xl" fontWeight="extrabold" mt="6" mb="2">Collect rewards</Text>
    <FreeWash />
    <Text size="lg" fontWeight="extrabold" mt="6">Partner discounts</Text>
    <ScrollView horizontal={true} my="2">
    <HStack space={4}>
    <PartnerDiscountCard />
    <PartnerDiscountCard />
    </HStack>
    </ScrollView>
    </View>
  )
}

export default RewardsScreen