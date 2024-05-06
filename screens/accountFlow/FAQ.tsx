import React from 'react'
import { Text, View, Box, Button, Flex, Spacer } from 'native-base'
import TitleCard from '../../components/TitleCard'

function FAQ() {
  return (
    <View m="6">
      <Flex h="100%">
        <Box>
<Text size="xl" mb="2" fontWeight="extrabold">FAQ & Feedback</Text>
<TitleCard title="Payment"></TitleCard>
<TitleCard title="Membership"></TitleCard>
<TitleCard title="Pay by Plate"></TitleCard>
<TitleCard title="B2B"></TitleCard>
</Box>
<Spacer />
<Button mt ="2" alignSelf="flex-end">Submit feedback</Button>
</Flex>
    </View>
  )
}

export default FAQ
