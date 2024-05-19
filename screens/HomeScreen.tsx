import React, {useEffect} from 'react'
import { ITheme, Text, useTheme, HStack, ScrollView, Flex, View } from 'native-base'
import SquareCard from '../components/SquareCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';
import ProductCardDark from '../components/ProductCardDark';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchWashStations } from '../store/WashStationSlice';


type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">

function HomeScreen({ navigation }: Props) {

  const dispatch: AppDispatch = useDispatch();
  const washStations = useSelector((state: RootState) => state.washStations.washStations);
  
  useEffect(() => {
    dispatch(fetchWashStations());
  }, [dispatch]);
  
  console.log(washStations, "washStations in HomeScreen")
  return (
     <ScrollView m={6}>
     <Flex flexDirection='column' alignItems='center' justifyContent='center' w="100%" h="fit-content" py="6">
     <ScrollView horizontal={true} paddingRight={5} borderRadius={10}>
     <HStack space={2}>
      {washStations && washStations.map((station,index) => (
        <SquareCard key={index} name={station.stationName} address={station.address} />
      ))}
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