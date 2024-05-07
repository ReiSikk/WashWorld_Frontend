import React, { useState } from 'react';
import { Box, VStack, HStack, Text, Input, Select, Button, IconButton, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';


const EnterLicensePlate = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <VStack space={4} px="5" py="2">
      <Text fontSize="xl" bold mt="5">
        Enter your license plate
      </Text>

      <Button mt="5" colorScheme="green" onPress={() => console.log('Confirm Pressed')}>
        Confirm
      </Button>
    </VStack>
  );
};

export default EnterLicensePlate;
