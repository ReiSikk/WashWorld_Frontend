import React, {useEffect, useState} from 'react'
import { ITheme, Text, useTheme, HStack, ScrollView, Flex, View, Fab, Icon } from 'native-base'
import SquareCard from '../components/SquareCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';
import ProductCardDark from '../components/ProductCardDark';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchWashStations } from '../store/WashStationSlice';
import { fetchSubscriptions } from '../store/SubscriptionSlice';
import { checkTokenValidity, getProfile } from '../store/MemberSlice';
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from "@expo/vector-icons";
import Picture from '../components/Picture';




type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">



 function HomeScreen({ navigation }: Props) {
const dispatch: AppDispatch = useDispatch();
const washStations = useSelector((state: RootState) => state.washStations.washStations);
const userAuthenticated = useSelector((state: RootState) => state.member.isAuthenticated);
const [camera, setCamera] = useState(false);
const [photoToDisplay, setPhotoToDisplay] = useState('')

const [savedPhoto, setSavedPhoto] = useState({
photo: ""
});



useEffect(() => {
  dispatch(fetchWashStations());
  dispatch(getProfile());
}, [dispatch, userAuthenticated]);

/* useEffect(() => {
  if (token && tokenStatus === 'failed') {
    navigation.navigate('LoginScreen');
  }
  console.log(tokenStatus, "tokenStatus in HomeScreen useEffect");

}, [tokenStatus, navigation]); */





  return (
     <ScrollView m={6}>
     <Flex flexDirection='column' alignItems='center' justifyContent='center' w="100%" h="fit-content" py="6">
     <ScrollView horizontal={true} paddingRight={5} borderRadius={10}>
     <HStack space={2}>
      {washStations && washStations.map((station,index) => (
        <SquareCard
         key={index}
         name={station.stationName} 
         address={station.address}
         onPress={() => navigation.navigate('Location', {locationID: station.id})}
           />
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


 <Fab renderInPortal={false} shadow={2} placement="top-right" size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="4" />} label="Report a problem" onPress={() => navigation.navigate('SupportTicketScreen')} />
    </ScrollView>
  )
}

export default HomeScreen