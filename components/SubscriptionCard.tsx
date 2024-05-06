import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Container, Spacer, Text, useTheme, Button, ICustomTheme, Center, Box, FormControl, Input, Stack, Link, Heading, Checkbox, HStack, View, Flex } from "native-base";
import { TouchableOpacity } from 'react-native';
import  { StyleSheet} from 'react-native';


function SubscriptionCard({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View>
        <Flex flexDirection="row" bg="grey5" width="90%" p="4">
        <Box>
        <Text fontSize="2xl" color="greenWhite" fontWeight={800}>Basic</Text>
        <Text fontSize="4xl" color="black" fontWeight={800}>69 kr./md.</Text>
       <Text color="black" fontWeight={300}>Basis wash program for a discounted price</Text>
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