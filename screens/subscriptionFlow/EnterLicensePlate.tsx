import React, { useState, useEffect } from 'react';
import { Box, VStack, HStack, Text, Input, Select, Button, IconButton, Icon, View, FormControl, ScrollView, Checkbox, Pressable  } from 'native-base';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import ProgressSteps from '../../components/ProgressSteps';
import { setCurrentStep } from "../../store/StepSlice";
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../MainNavigation';
import  { setCarsState }  from "../../store/SubscriptionSlice";



type Props = NativeStackScreenProps<RootStackParamList, "EnterLicensePlate">
type Car = {
  licensePlate: string;
  country: string;
  licensePlateError: string;
  countryError: string;
};

const customData = require('../../countries.json');


const EnterLicensePlate = ({route, navigation}: Props) => {
  const { subscriptionPlanID } = route.params;
  const dispatch: AppDispatch = useDispatch();
  const stateCars = useSelector((state: RootState) => state.subscription.cars);
  console.log(stateCars, "stateCars in enterPlate state");
 
  

  const [cars, setCars] = useState<Car[]>([
    {
      licensePlate: stateCars[0]?.licensePlate ||'',
      country: stateCars[0]?.country ||'',
      licensePlateError: '',
      countryError: '',
    },
    {
      licensePlate: stateCars[1]?.licensePlate ||'',
      country: stateCars[1]?.country ||'',
      licensePlateError: '',
      countryError: '',
    },
  ]);

  const [addSecondPlate, setAddSecondPlate] = useState(false);
  useEffect(() => {
    if (stateCars[1]?.licensePlate && stateCars[1]?.country) {
      setAddSecondPlate(true);
    } else {
      setAddSecondPlate(false);
    }
  }, [stateCars]);

  //compare to values from countries.json
  const validateCountry = (value: string): { isValid: boolean, errorMessage: string } => {
    const isValid = customData.some((item: { Country: string }) => item.Country === value);
    return {
        isValid,
        errorMessage: isValid ? '' : 'Invalid country name'
    };
}

//validate country
const handleCountryChange = (index:any, value:string) => {
  const validation = validateCountry(value);
  const newCars = cars.map((car, i) => {
    if (i === index) {
      return { ...car, country: value, countryError: validation.errorMessage };
    }
    return car;
  });

  setCars(newCars);
  return newCars[index]; // return the updated car
};

const validateNumberPlate = (index: number, value: string) => {
  let licensePlateError = '';
  if (value === undefined || value.length < 3 || value.length > 12) {
    licensePlateError = 'Invalid plate number';
  }

  const newCars = cars.map((car, i) => {
    if (i === index) {
        const trimmedPlateNumber = value.replace(/\s/g, '').toUpperCase();
      return { ...car, licensePlate: trimmedPlateNumber, licensePlateError };
    }
    return car;
  });

  setCars(newCars);
  return newCars[index];
};

const validateForm = () => {
  let isFormValid = true;
  const newCars = cars.map((car, index) => {
    // Initialize placeholders for validation results
    let validatedCountry = { ...car };
    let validatedPlate = { ...car };

    // Always validate first car and second car if it exists
    if (index === 0 || (index === 1 && addSecondPlate)) {
      validatedCountry = handleCountryChange(index, car.country);
      validatedPlate = validateNumberPlate(index, car.licensePlate);

      if (validatedCountry.countryError || validatedPlate.licensePlateError || !car.country || !car.licensePlate) {
        isFormValid = false;
      }
    }

    return {...car, ...validatedCountry, ...validatedPlate}; 
  });

  setCars(newCars);

  if (isFormValid) {
    const trimmedCarsPayload = newCars.filter((_, i) => i === 0 || (i === 1 && addSecondPlate))
                                      .map(({ country, licensePlate }) => ({ country, licensePlate }));
    dispatch(setCarsState(trimmedCarsPayload));
    navigation.navigate('OrderSummary', { subscriptionPlanID: subscriptionPlanID});
  } else {
    alert('Please correct the errors in the form.');
  }
};


  return (
    <>
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
      <FormControl isRequired isInvalid={!!cars[0].licensePlateError}>
        <FormControl.Label _text={{bold: true}}>Plate number</FormControl.Label>
        <Input 
          placeholder="ABC 123"
          value={cars[0].licensePlate}
          onChangeText={(value) => validateNumberPlate(0,value)}
        />
        <FormControl.ErrorMessage>{cars[0].licensePlateError}</FormControl.ErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={!!cars[0].countryError}>
        <FormControl.Label _text={{bold: true}}>Country</FormControl.Label>
        <Input 
          placeholder="Denmark"
          value={cars[0].country}
          onChangeText={(value) => handleCountryChange(0,value)}
        />
        <FormControl.ErrorMessage>{cars[0].countryError}</FormControl.ErrorMessage>
      </FormControl>
    </VStack>
      <Pressable onPress={() => setAddSecondPlate(!addSecondPlate)} color={'black'} >
        <HStack space={2} justifyContent={'flex-start'} alignItems={'center'}>
        <Text>{addSecondPlate ? 'Remove second car' : 'Add another car'}</Text>
        <Icon as={AntDesign} name={addSecondPlate ? 'minus' : 'plus'} size={4} color={'black'} />
        </HStack>
      </Pressable>
      {addSecondPlate && (
        <VStack space={4}>
        <FormControl isRequired isInvalid={!!cars[1].licensePlateError}>
          <FormControl.Label _text={{bold: true}}>Plate number</FormControl.Label>
          <Input 
            placeholder="ABC 123"
            value={cars[1].licensePlate}
            onChangeText={(value) => validateNumberPlate(1,value)}
          />
          <FormControl.ErrorMessage>{cars[1].licensePlateError}</FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!cars[1].countryError}>
          <FormControl.Label _text={{bold: true}}>Country</FormControl.Label>
          <Input 
            placeholder="Denmark"
            value={cars[1].country}
            onChangeText={(value) => handleCountryChange(1,value)}
          />
          <FormControl.ErrorMessage>{cars[1].countryError}</FormControl.ErrorMessage>
        </FormControl>
      </VStack>
      )}
      </VStack>
      </Box>
        <Box bottom={0} mt={'auto'} ml={6} mr={6} mb={6}>
        <Button mt="5" colorScheme="green" onPress={validateForm}>
          Add license plate
        </Button>
      </Box>
    </>
  );
};

export default EnterLicensePlate;