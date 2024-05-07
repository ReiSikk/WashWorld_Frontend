import React from 'react'
import Settings from './accountFlow/Settings'
import WashHistory from './accountFlow/WashHistory'
import PaymentMethods from './accountFlow/PaymentMethods'
import SubscriptionCard from '../components/SubscriptionCard'
import { ITheme, Text, useTheme } from 'native-base'
import SquareCard from '../components/SquareCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';
import ProductCardDark from '../components/ProductCardDark';
import { TouchableOpacity } from 'react-native';


type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">

function HomeScreen({ navigation }: Props) {
  return (
     <>
    <SquareCard />
        <ProductCardDark onPress={() => navigation.navigate('HomeSubscriptionsScreen')} />
    </>
  )
}

export default HomeScreen