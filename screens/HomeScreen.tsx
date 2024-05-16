import React from 'react'
import { ITheme, Text, useTheme, HStack, ScrollView, Flex, View } from 'native-base'
import SquareCard from '../components/SquareCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';
import ProductCardDark from '../components/ProductCardDark';
import { TouchableOpacity } from 'react-native';
import { S } from '@expo/html-elements';


type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">

function HomeScreen({ navigation }: Props) {
  return (
     <ScrollView m={6}>
     <Flex flexDirection='column' alignItems='center' justifyContent='center' w="100%" h="fit-content" py="6">
     <ScrollView horizontal={true} height={'fit-content'}>
     <HStack space={2}>
    <SquareCard />
    <SquareCard />
    </HStack>
    </ScrollView>
    </Flex>
      <ProductCardDark 
      onPress={() => navigation.navigate('HomeSubscriptionsScreen')}
      title='Subscriptions'
       />
      <ProductCardDark 
      onPress={() => navigation.navigate('PlanOverview', {subscriptionPlanID: 5})}
      title='Pay by Plate'
       />
    </ScrollView>
  )
}

export default HomeScreen