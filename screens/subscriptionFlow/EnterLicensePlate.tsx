import React, { useState } from 'react';
import { Box, VStack, HStack, Text, Input, Select, Button, IconButton, Icon, View, FormControl, ScrollView, Checkbox  } from 'native-base';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import ProgressSteps from '../../components/ProgressSteps';
import { setCurrentStep } from "../../store/StepSlice";
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../MainNavigation';
import InputWLabel from '../../components/InputWLabel';





type Props = NativeStackScreenProps<RootStackParamList, "EnterLicensePlate">

const customData = require('../../countries.json');
console.log(customData);


const EnterLicensePlate = ({route, navigation}: Props) => {
  const dispatch: AppDispatch = useDispatch();

  const [plateNumber, setPlateNumber] = useState('');
  const [formattedPlateNumber, setFormattedPlateNumber] = useState('');
  const [plateNumberError, setPlateNumberError] = useState('');

  const [country, setCountry] = useState('');
  const [countryError, setCountryError] = useState('');
  const [addSecondPlate, setAddSecondPlate] = useState(false);

  //compare to values from countries.json
  const validateCountry = (value: string): { isValid: boolean, errorMessage: string } => {
    const isValid = customData.some((item: { Country: string }) => item.Country === value);
    return {
        isValid,
        errorMessage: isValid ? '' : 'Invalid country name'
    };
}

//validate country
const handleCountryChange = (value: string) => {
const validation = validateCountry(value);
if (!validation.isValid) {
    setCountryError(validation.errorMessage);
    return false
} else {
    setCountryError('');
    return true
}
}

  const validateNumberPlate = (value:string) => {
    if (value === undefined || value.length < 3) {
      setPlateNumberError('Invalid plate number');
      return false;
    }
    setPlateNumberError('');
    return true;
  };

  



  const validateForm = () => {
    handleCountryChange(country);
    validateNumberPlate(plateNumber);
    if (handleCountryChange(country) && validateNumberPlate(plateNumber)) {
      navigation.navigate('OrderSummary');
    }
  };


  return (
    <Box pt={'5%'}>
      <VStack space={4} m="6">
        <ProgressSteps currentStep={0} totalSteps={4}  />
      <Text size={'xl'} fontWeight={'extrabold'}>
        Enter your license plate
      </Text>
      <Text>
      To use the subscription service, you need to register your license plate first for it to be recognized at he station.
      </Text>
      <VStack space={4}>
  <FormControl isRequired isInvalid={!!plateNumberError}>
    <FormControl.Label _text={{bold: true}}>Plate number</FormControl.Label>
    <Input 
      placeholder="ABC 123"
      value={plateNumber}
      onChangeText={setPlateNumber}
    />
    <FormControl.ErrorMessage>{plateNumberError}</FormControl.ErrorMessage>
  </FormControl>
  <Button onPress={() => setAddSecondPlate(!addSecondPlate)} color={'black'}>
    <HStack justifyContent={'flex-start'}>
  <AntDesign name="plus" size={24} color="black" />
    <Text>{addSecondPlate  ? 'Remove second car' : 'Add second car' }</Text>
    </HStack>
    </Button>
  {addSecondPlate && (
     <FormControl isRequired isInvalid={!!plateNumberError}>
     <FormControl.Label _text={{bold: true}}>Plate number</FormControl.Label>
     <Input 
       placeholder="ABC 123"
       value={plateNumber}
       onChangeText={setPlateNumber}
     />
     <FormControl.ErrorMessage>{plateNumberError}</FormControl.ErrorMessage>
   </FormControl>
  ) 
  }
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
      </Box>
  );
};

export default EnterLicensePlate;
