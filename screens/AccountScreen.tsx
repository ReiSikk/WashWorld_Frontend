import React, { useEffect, useState } from 'react'
import { Text, View, Box, Button, Flex, VStack, ScrollView, HStack, Pressable } from 'native-base'
import TitleCard from '../components/TitleCard'
import MembershipCard from '../components/MembershipCardComponents'
import { RootStackParamList } from './MainNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberDetails, getProfile, getMemberCars } from '../store/MemberSlice';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { resetCarsState } from '../store/SubscriptionSlice';


type Props = NativeStackScreenProps<RootStackParamList, "AccountScreen">

function AccountScreen({ navigation }: Props) {
  const dispatch: AppDispatch = useDispatch();
  const memberCars = useSelector((state: RootState) => state.member.cars);
  const memberID = useSelector((state: RootState) => state.member.memberID);
//ensure array of booleans is same as cars array
  const [showDetails, setShowDetails] = useState(new Array(memberCars.length).fill(false));


  useEffect(() => {
    dispatch(getProfile());
    if(memberID && memberID !== null) {
      const memberIDNumber = parseInt(memberID);
      dispatch(getMemberDetails(memberIDNumber))
      dispatch(getMemberCars())
    } 
  }, [dispatch, memberCars]);

  return (
    <ScrollView m="6">
      <MembershipCard />
      <VStack space={4} pb={4}>
      <Text fontSize="lg" fontWeight="bold" mt="4">My cars</Text>
      {memberCars && memberCars.length > 0 ? memberCars.map((car, index) => (
        <Pressable
        shadow={4}
         onPress={() => {
          const newShowDetails = [...showDetails];
          newShowDetails[index] = !newShowDetails[index];
        setShowDetails(newShowDetails)
      }
        }
         key={index}>
        <Flex bg={'greenWhite'} p={4} rounded={'sm'}> 
          <HStack space={4} alignItems="center" justifyContent={'space-between'}>
            <Flex flexDirection={'row'}>
          <FontAwesome5 name="car" size={36} color="white" />
          <Text color="white" fontSize={'2xl'} fontWeight={'extrabold'} ml={2}>
            {car.licensePlate} {car.country}
          </Text>
            </Flex>
          <AntDesign name={showDetails[index] ? 'down' : 'right'} size={24} color="white" />
          </HStack>
          {showDetails[index] &&
          <HStack space={2} mt={'auto'} mb={0} pt={4} alignItems="baseline" justifyContent={'space-between'}>
            <HStack space={2} alignItems={'baseline'}>
          <Text color="white" fontSize="lg" fontWeight={'extrabold'}>
           {car.subscription.name}
          </Text>
          <Text color="white" fontSize="md" fontWeight={'medium'}>
             plan
            </Text>
            </HStack>
          <Text color="white" fontSize="lg" fontWeight={'extrabold'}>
            {car.subscription.price_per_month_kr} kr./md.
            </Text>
          </HStack>
}
          
        </Flex>
        </Pressable>
      )) : (
      <Flex bg={'greenWhite'} p={4} rounded={'sm'}>
      <Text color="white" fontSize={'2xl'} fontWeight={'extrabold'}>
        No cars registered
      </Text>
      </Flex>
      )}
      </VStack>
      <VStack space={4}>
<TitleCard title="Wallet" onPress={() => navigation.navigate('PaymentMethods')} />
<TitleCard title="Wash History" onPress={() => navigation.navigate('WashHistory')}/>
<TitleCard title="FAQ & Feedback " onPress={() => navigation.navigate('FAQ')}/>
<TitleCard title="Contact" onPress={() => navigation.navigate('Contact')}/>
<TitleCard title="App settings" onPress={() => navigation.navigate('Settings')}/>
</VStack>
    </ScrollView>
  )
}

export default AccountScreen