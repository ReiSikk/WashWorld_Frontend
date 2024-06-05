import React, { useEffect, useState } from 'react'
import { Text, View, Box, Button, Flex, VStack, ScrollView, HStack, Badge } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Divider } from 'native-base';
import LocationsScreen from '../LocationsScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../MainNavigation';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { WashStationQueries } from '../../api/WashStationQueries';
import { WashBayQueries } from '../../api/WashBayQueries';
import { format, parseISO } from 'date-fns';



type Props = NativeStackScreenProps<RootStackParamList, "Location">
type WashBay = {
  id: number;
  available: boolean;
  bayNr: string;
  bayType: string;
  dimensionHeight: string;
  dimensionWidth: string;
};


function Location({ route, navigation}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const { locationID } = route.params;
  const washStations = useSelector((state: RootState) => state.washStations.washStations);

  const location = washStations.find(station => station.id === locationID);
  const [washBays, setWashBays] = useState<WashBay[]>([]);
  const [isStationOpen, setIsStationOpen] = useState<boolean | null>(null);

  const role = useSelector((state: RootState) => state.member.role);

  const fetchWashBays = async () => {
    const data = await WashStationQueries.fetchStationsWithBays(locationID);
    setWashBays(data);
  };

  const changeWashBayStatus = async (bayId: number) => {
    const bayToUpdate = washBays.find(bay => bay.id === bayId);
    const currentStatus = bayToUpdate?.available;
    const updatedAvailability = !currentStatus;

    const updatedBay = await WashBayQueries.updateWashBay(bayId, updatedAvailability);

    setWashBays(prevState =>
      prevState.map(bay => (bay.id === bayId ? { ...bay, available: updatedBay.available } : bay))
    )
    fetchWashBays();
  } 



  useEffect(() => {
    const fetchStationOpenStatus = async () => {
      const isOpen = await WashStationQueries.isStationOpen(locationID);
      setIsStationOpen(isOpen);
    };
  
    fetchWashBays();
    fetchStationOpenStatus();
  }, [locationID]);


  return (
<ScrollView mx="6" showsVerticalScrollIndicator={false}>
    <Text mt="6" mb="4" size="xl" fontWeight="extrabold">{location?.stationName}</Text>
    <VStack mb="8" space={2}>
    <HStack space={2}>
    <Ionicons name="location-outline" size={24} color="black" />
          <Text>{location?.address}</Text>
          </HStack>
          <HStack>
          <Ionicons name="time-outline" size={24} color="black" />
      <Text color="greenWhite" ml="2" pr={2}>{isStationOpen ? 'Open' : 'Closed'}</Text>
      <Text>
        {location?.openingTime.split(':').slice(0, 2).join(':')} - {location?.closingTime.split(':').slice(0, 2).join(':')}
      </Text>
          </HStack>
          <HStack space={2}>
          <Ionicons name="map-outline" size={24} color="black" />
          <Text>2.2 km</Text>
          </HStack>
          </VStack>
         <VStack>
</VStack>

    <Button my="4">Get directions</Button>
    <Flex flexDirection="row">
    <Text>See more car washes in Copenhagen </Text>
    <TouchableOpacity onPress={() => navigation.navigate('LocationsScreen')}>
    <Text color="greenWhite">here.</Text>
    </TouchableOpacity>
    </Flex>
    <Divider my="2" _light={{
        bg: "grey10"
      }} _dark={{
        bg: "grey10"
      }} />
      <Text size="xl" fontWeight="extrabold" mb="2">Automatic wash bays</Text>
      <VStack space={4} mb="8">
        {washBays.map((bay, index) => (
          bay.bayType === "Automatic" &&
          <VStack key={index} space={2} bg={'white'} py={4} px={6} shadow={1} justifyContent={'space-between'} borderRadius="sm">
          <HStack space={4} justifyContent={'space-between'}>
          <Text fontFamily={'extrabold'} fontSize={'lg'}>Automatic wash bay {bay.bayNr}</Text>
          <Badge variant="solid" borderRadius="sm" alignSelf="flex-start" px="4" bg={bay.available ? "greenWhite" : "orange"}>{bay.available ? "Available" : "Not available"}</Badge>
          </HStack>
          <VStack space={0.5}>
          <Text fontFamily={'medium'} mt={4}>Max Dimensions</Text>
          <Text>Max height: {bay.dimensionHeight}</Text>
          <Text>Max width: {bay.dimensionWidth}</Text>
          </VStack>
          {role === 'admin' && 
          bay && (
    <>
    <Text fontSize="lg" fontWeight="extrabold" mt="4">Admin settings</Text>
      <Button bg={bay.available ? "orange" : "greenWhite"} my="2" onPress={() => changeWashBayStatus(bay.id)}>{bay.available === true ? "Set wash bay to unavailable" : "Set wash bay to be available"}</Button>
      </>
            )}
          </VStack>
        ))}
      </VStack>
      <Divider my="2" _light={{
        bg: "grey10"
      }} _dark={{
        bg: "grey10"
      }} />
      <Text size="xl" fontWeight="extrabold" mb="2">Self-wash bays</Text>

      <VStack space={4}>
      {washBays.map((bay, index) => (
          bay.bayType === "Self wash" &&
          <VStack  key={index} space={2} bg={'white'} py={4} px={6} justifyContent={'space-between'} borderRadius="sm">
          <HStack space={4} justifyContent={'space-between'}>
          <Text fontSize='lg' fontWeight="extrabold">Self-wash bay {bay.bayNr}</Text>
          <Badge variant="solid" borderRadius="sm" alignSelf="flex-start" px="4" bg={bay.available ? "greenWhite" : "orange"}>{bay.available ? "Available" : "Not available"}</Badge>
          </HStack>
          <VStack space={0.5}>
          <Text fontFamily={'medium'} mt={4}>Max Dimensions</Text>
          <Text>Max height: {bay.dimensionHeight}</Text>
          <Text>Max width: {bay.dimensionWidth}</Text>
          </VStack>
          {role === 'admin' && 
          bay && (
            <>
            <Text fontSize="lg" fontWeight="extrabold" mt="4">Admin settings</Text>
              <Button bg={bay.available ? "orange" : "greenWhite"}  my="2" onPress={() => changeWashBayStatus(bay.id)}>{bay.available === true ? "Set wash bay to unavailable" : "Set wash bay to be available"}</Button>
              </>
            )}
          </VStack>
        ))}

      </VStack>


      

</ScrollView>
  )
}

export default Location