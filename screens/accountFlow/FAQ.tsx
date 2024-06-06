import React from 'react'
import { Text, View, Box, Button, Flex, Spacer, VStack, Fab, Icon } from 'native-base'
import TitleCard from '../../components/TitleCard'
import { AntDesign } from "@expo/vector-icons";

function FAQ() {
  return (
    <>
    <View m="6">
      <Flex h="100%">
        <VStack space={4}>
         <Text size="xl" mb="2" fontWeight="extrabold">FAQ & Feedback</Text>
         <TitleCard title="Payment"></TitleCard>
         <TitleCard title="Membership"></TitleCard>
         <TitleCard title="Pay by Plate"></TitleCard>
         <TitleCard title="B2B"></TitleCard>
         </VStack>
         <Spacer />
      </Flex>
    </View>
    <Fab renderInPortal={false} shadow={6} placement="bottom-right" size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="4" />} label="Submit feedback" aria-label='Submit feedback'/>
    </>
  )
}

export default FAQ
