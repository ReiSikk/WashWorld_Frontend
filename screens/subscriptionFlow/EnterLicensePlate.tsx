import React, { useState } from 'react';
import { Box, VStack, HStack, Text, Input, Select, Button, IconButton, Icon, View, FormControl  } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import ProgressSteps from '../../components/ProgressSteps';
import { setCurrentStep } from "../../store/StepSlice";
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../MainNavigation';
import InputWLabel from '../../components/InputWLabel';




type Props = NativeStackScreenProps<RootStackParamList, "EnterLicensePlate">

const EnterLicensePlate = ({route, navigation}: Props) => {
  const dispatch: AppDispatch = useDispatch();

  const [plateNumber, setPlateNumber] = useState('');
  const [formattedPlateNumber, setFormattedPlateNumber] = useState('');
  const [plateNumberError, setPlateNumberError] = useState('');

  const [country, setCountry] = useState('');
  const [countryError, setCountryError] = useState('');


  const validateCountry = (value:string) => {
    if (value === undefined || value.length < 3) {
      setCountryError('Invalid country of issue');
      return false;
    }
    setCountryError('');
    return true;
  };

  const validateNumberPlate = (value:string) => {
    if (value === undefined || value.length < 3) {
      setPlateNumberError('Invalid plate number');
      return false;
    }
    setPlateNumberError('');
    return true;
  };

  



  const validateForm = () => {
    validateCountry(country);
    validateNumberPlate(plateNumber);
    if (validateCountry(country) && validateNumberPlate(plateNumber)) {
      navigation.navigate('OrderSummary');
    }
  };
  
  

  return (
    <>
      <HStack space={4} m="6">
        <ProgressSteps currentStep={0} totalSteps={4} />
      </HStack>
      <VStack space={4} m="6">
      <Text size={'xl'} fontWeight={'extrabold'}>
        Enter your license plate
      </Text>
      <Text>
      To use the subscription service, you need to register your license plate first for it to be recognized at he station.
      </Text>
      <VStack space={4} m='6'>
  <FormControl isRequired isInvalid={!!plateNumberError}>
    <FormControl.Label _text={{bold: true}}>Plate number</FormControl.Label>
    <Input 
      placeholder="ABC 123"
      value={plateNumber}
      onChangeText={setPlateNumber}
    />
    <FormControl.ErrorMessage>{plateNumberError}</FormControl.ErrorMessage>
  </FormControl>
  <FormControl isRequired isInvalid={!!countryError}>
    <FormControl.Label _text={{bold: true}}>Country</FormControl.Label>
    <Input 
      placeholder="Denmark"
      value={country}
      onChangeText={setCountry}
    />
    <FormControl.ErrorMessage>{countryError}</FormControl.ErrorMessage>
  </FormControl>
</VStack>

      <Button mt="5" colorScheme="green" onPress={validateForm}>
        Add license plate
      </Button>
      </VStack>
    </>
  );
};

export default EnterLicensePlate;
