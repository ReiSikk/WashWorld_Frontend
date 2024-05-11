import React, { useState, useEffect } from 'react';
import { Text, VStack, Button, Icon, Pressable, HStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';



const PaymentMethodSelector = () => {
/*     const [savedPaymentMethods, setSavedPaymentMethods] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState({
        card: false,
        mobilePay: false
}); */


const [paymentMethods, setPaymentMethods] = useState(['']);
const [selectedMethod, setSelectedMethod] = useState('');
console.log(selectedMethod, 'selectedMethod');

//TODO: Get saved payment methods from backend API
useEffect(() => {
  setPaymentMethods(['Card', 'Card 2']);
}, []);
  
    return (
      <VStack space={4}>
        <Text size={'xl'} fontWeight={'extrabold'}>
          Wallet
        </Text>
        <VStack space={0}>
        <Text fontWeight={'extrabold'} color={'greenWhite'} size={'lg'}>
          My payment methods
        </Text>
        <Text fontSize="sm" color="grey60">
          {!paymentMethods ? 'No saved payment methods found, add one to continue' : 'Select your payment method to continue'}
        </Text>
        </VStack>
        <VStack>
      {paymentMethods.map((method, index) => (
        <Pressable 
          key={index}
          color={'black'}
          padding={4}
          bg={selectedMethod === method ? 'greenWhite' : 'grey10'}
          borderRadius={4}
          onPress={() => setSelectedMethod(method)}
        >
          <HStack space={2} justifyContent={'flex-start'} alignItems={'center'}>
            <Icon as={AntDesign} name='plus' size={4} color={'black'}  />
            <Text>{method}</Text>
            <AntDesign name="right" size={14} marginLeft={'auto'} />
          </HStack>
        </Pressable>
      ))}
            <Pressable 
          color={'black'}
          padding={4}
          borderRadius={4}
          onPress={() => setSelectedMethod('Mobile Pay')}
        >
          <HStack space={2} justifyContent={'flex-start'} alignItems={'center'}>
            <Icon as={AntDesign} name='plus' size={4} color={'black'}  />
            <Text>Pay with Mobile Pay</Text>
            <AntDesign name="right" size={14} marginLeft={'auto'} />
          </HStack>
        </Pressable>
    </VStack>
      </VStack>
    );
  };
  

  export default PaymentMethodSelector;