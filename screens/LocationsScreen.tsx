import React from 'react'
import { Text, VStack, ScrollView } from 'native-base'
import WashStationCard from '../components/WashStationCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';
import Location from './locationFlow/Location';


type Props = NativeStackScreenProps<RootStackParamList, "LocationsScreen">

function LocationsScreen({ navigation }: Props) {

  const washStationsData = [
    { id: 1, name: 'Wash World Lyngby', address: 'Dynamovej 4, 2860 Søborg' },
    { id: 2, name: 'Wash World Soborg', address: 'Dynamovej 4, 2860 Søborg' },
    { id: 3, name: 'Wash World Amager', address: 'Dynamovej 4, 2860 Søborg' },
    { id: 4, name: 'Wash World NV', address: 'Dynamovej 4, 2860 Søborg' },
  ];

  return (
    <ScrollView mx="6">
<VStack space={4}>
<Text  mt="6" size="xl" fontWeight="extrabold">Wash stations</Text>
{washStationsData.map(station => (
          <WashStationCard
            key={station.id}
            name={station.name}
            address={station.address}
            onPress={() => navigation.navigate('Location')}
          />
        ))}
</VStack>
    </ScrollView>
  )
}

export default LocationsScreen