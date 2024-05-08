import React, { useState } from 'react';
import { Box, VStack, HStack, Text, Input, Select, Button, IconButton, Icon, View } from 'native-base';
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

  const validatePlateNumber = (value:string) => {

        // Remove any existing spaces from the value
        const newValue = value.replace(/\s/g, '');

    if (newValue === undefined || newValue.length < 6) {
      setPlateNumberError('Invalid license plate number');
      return false;
    }
        // Format the value for display
        let formattedValue = '';
        for (let i = 0; i < newValue.length; i++) {
          // Add a space after every 3rd character
          if (i > 0 && i % 3 === 0) {
            formattedValue += ' ';
          }
          formattedValue += newValue[i];
        }

    setFormattedPlateNumber(formattedValue)
    setPlateNumberError('');
    return true;
  };

  const validateCountry = (value:string) => {
    if (value === undefined || value.length < 3) {
      setCountryError('Invalid country of issue');
      return false;
    }
    setCountryError('');
    return true;
  };

  const handleAddLicensePlate = () => {
    const isPlateNumberValid = validatePlateNumber(plateNumber);
    const isCountryValid = validateCountry(country);

    if (isPlateNumberValid && isCountryValid) {
      navigation.navigate('OrderSummary');
    } else {
      alert('Please fill in all fields correctly');
    }
  };



/*   useFocusEffect(
    React.useCallback(() => {
      // Set the current step to the appropriate number when the screen comes into focus
      dispatch(setCurrentStep(1));
    }, [dispatch])
  ); */
  
  

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
      <VStack space={1} justifyContent={'space-between'}>
        <InputWLabel
         label="Plate number" 
         placeholder="ABC 123"
         helperText={plateNumberError}
         value={plateNumber} 
        setValue={setPlateNumber} 

           />
        <InputWLabel 
        label="Country"
        placeholder="Denmark"
        helperText={plateNumberError}
        value={country} 
        setValue={setCountry} 
        />
      </VStack>

      <Button mt="5" colorScheme="green" onPress={handleAddLicensePlate}>
        Add license plate
      </Button>
      </VStack>
    </>
  );
};

export default EnterLicensePlate;
