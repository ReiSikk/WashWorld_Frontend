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

  const [formData, setData] = useState({ name: '' });
  const [errors, setErrors] = useState({});

  const validate = (value:string) => {
    if (value === undefined) {
      setErrors({ name: 'Name is required' });
      return false;
    } else if (value.length < 3) {
      setErrors({ name: 'Name is too short' });
      return false;
    }
    setErrors({});
    return true;
  };



/*   const onSubmit = () => {
    if(validate()) {
      console.log('Submitted')
      setErrors({});
    } else {
      console.log('Validation Failed');
    } 
  }; */



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
         helperText='Invalid license plate number'
         formData={formData} 
      setData={setData} 
      errors={errors} 
      validate={validate}
           />
        <InputWLabel 
        label="Country"
        placeholder="Denmark"
        helperText='Invalid country of issue'
        formData={formData} 
      setData={setData} 
      errors={errors} 
      validate={validate}
        />
      </VStack>

      <Button mt="5" colorScheme="green" onPress={() => {
       /*  onSubmit(); */
      }}>
        Add license plate
      </Button>
      </VStack>
    </>
  );
};

export default EnterLicensePlate;
