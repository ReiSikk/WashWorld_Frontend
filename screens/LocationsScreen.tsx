import React from 'react'
import { Text, VStack, ScrollView } from 'native-base'
import WashStationCard from '../components/WashStationCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';
import Location from './locationFlow/Location';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchWashStations } from '../store/WashStationSlice';


type Props = NativeStackScreenProps<RootStackParamList, "LocationsScreen">

function LocationsScreen({ navigation }: Props) {

  const dispatch: AppDispatch = useDispatch();
  const washStations = useSelector((state: RootState) => state.washStations.washStations);
  
  useEffect(() => {
    dispatch(fetchWashStations());
  }, [dispatch]);

  return (
    <ScrollView mx="6" showsVerticalScrollIndicator={false}>
<VStack space={4}>
<Text  mt="6" size="xl" fontWeight="extrabold">Wash stations</Text>
{washStations.map(station => (
          <WashStationCard
            key={station.id}
            name={station.stationName}
            address={station.address}
            onPress={() => navigation.navigate('Location', {locationID: station.id})}
          />
        ))}
</VStack>
    </ScrollView>
  )
}

export default LocationsScreen