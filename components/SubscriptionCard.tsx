import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Container, Spacer, Text, useTheme, Button, ICustomTheme, Center, Box, FormControl, Input, Stack, Link, Heading, Checkbox, HStack, View, Flex } from "native-base";
import { TouchableOpacity } from 'react-native';
import  { StyleSheet} from 'react-native';
import { Subscription } from '../entities/subscription';



interface SubscriptionCardProps {
  plan: Subscription;
  onPress: () => void;
}

function SubscriptionCard({ plan, onPress }: SubscriptionCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View shadow={2}>
        <Flex flexDirection="row" bg="grey5" width="100%" p="4">
        <Box>
        <Text fontSize="2xl" color="greenWhite" fontWeight={800}>{plan.name}</Text>
        <Text fontSize="4xl" color="black" fontWeight={800}>{plan.price_per_month_kr} kr./md.</Text>
       <Text color="black" fontWeight={300}>{plan.description}</Text>
       </Box>
       <Spacer />
       <Box justifyContent="center">
       <AntDesign name="right" size={24} />
       </Box>
       </Flex>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
container: {

},
})

export default SubscriptionCard