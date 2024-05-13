import React, { useState, useEffect } from 'react';
import { Text, VStack, Button, Icon, Pressable, HStack, FormControl,Input, ScrollView } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { CreateCardDTO } from '../entities/CreateCardDTO';
import { createCard } from '../store/CardSlice';




const PaymentMethodSelector = () => {
  const dispatch: AppDispatch = useDispatch();

  const [formData, setData] = React.useState({
    nameOnCard: "",
    cardNumber: "",
    expirationDate: new Date(),
    cvv: "",
  });
  const [errors, setErrors] = React.useState({});

  const newCard = new CreateCardDTO(formData.nameOnCard, formData.cardNumber, formData.expirationDate, formData.cvv);
  const [cardAdded, setCardAdded] = useState(false);
const [showForm, setShowForm] = useState(false);

const [paymentMethods, setPaymentMethods] = useState(['']);
const [selectedMethod, setSelectedMethod] = useState('');
console.log(selectedMethod, 'selectedMethod');

//TODO: Get saved payment methods from backend API
useEffect(() => {
  setPaymentMethods(['Card', 'Card 2']);
}, []);

const handleAddPaymentCard = () => {
  dispatch(createCard(newCard))
  .then(() => {
    setCardAdded(true);
  })
  .catch(error => {
    console.error('Error adding expense:', error);
  });
  
};




const validate = () => {
  let newErrors = {
    nameOnCard: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  };

  if (formData.nameOnCard === undefined || formData.nameOnCard.length < 3) {
    newErrors.nameOnCard = formData.nameOnCard === undefined ? 'Name is required' : 'Name is too short';
  }

  if (formData.cardNumber === undefined || formData.cardNumber.length < 16) {
    newErrors.cardNumber = formData.cardNumber === undefined ? 'Card number is required' : 'Card number is too short';
  }

  if (formData.expirationDate === undefined || !/^\d{2}\/\d{2}$/.test(formData.expirationDate.toISOString())) {
    newErrors.expirationDate = formData.expirationDate === undefined ? 'Expiry date is required' : 'Expiry date is not valid';
  }

  if (formData.cvv === undefined || formData.cvv.length < 3) {
    newErrors.cvv = formData.cvv === undefined ? 'CVV is required' : 'CVV is too short';
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const onSubmit = () => {
  validate() ? console.log('Submitted') : console.log('Validation Failed');
};


  
    return (
      <ScrollView>
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
            <Pressable 
          color={'black'}
          padding={4}
          borderRadius={4}
          onPress={() => {
            setShowForm(!showForm)
          }
        }
        >
          <HStack space={2} justifyContent={'flex-start'} alignItems={'center'}>
            <Icon as={AntDesign} name='plus' size={4} color={'black'}  />
            <Text>Add a payment card</Text>
            <AntDesign name={showForm ? 'down' : 'right' } size={14} marginLeft={'auto'} />
          </HStack>
          {showForm && 
          <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired isInvalid={'nameOncard' in errors}>
        <FormControl.Label _text={{
        bold: true
      }}>Name on card</FormControl.Label>
        <Input placeholder="John" onChangeText={value => setData({ ...formData,
        nameOnCard: value
      })} />
        {'nameOnCard' in errors ? <FormControl.ErrorMessage>Invalid format</FormControl.ErrorMessage> : <FormControl.HelperText>
            Name should contain atleast 3 character.
          </FormControl.HelperText>}
      </FormControl>
      <FormControl isRequired isInvalid={'cardNumber' in errors}>
        <FormControl.Label _text={{
        bold: true
      }}>Card number</FormControl.Label>
        <Input placeholder="1234 5678 9012 3456 " onChangeText={value => setData({ ...formData,
        cardNumber: value
      })} />
        {'cardNumber' in errors ? <FormControl.ErrorMessage>Invalid card number format</FormControl.ErrorMessage> : <FormControl.HelperText>
            Card number should contain atleast 16 characters.
          </FormControl.HelperText>}
      </FormControl>
      <FormControl isRequired isInvalid={'expirationDate' in errors}>
        <FormControl.Label _text={{
        bold: true
      }}>Expiration date</FormControl.Label>
        <Input placeholder="MM / YY " onChangeText={value => setData({ ...formData,
        expirationDate: new Date(value)
      })} />
        {'expirationDate' in errors ? <FormControl.ErrorMessage>Invalid expiration date</FormControl.ErrorMessage> : <FormControl.HelperText>
            Invalid expiration date format.
          </FormControl.HelperText>}
      </FormControl>
      <FormControl isRequired isInvalid={'cvv' in errors}>
        <FormControl.Label _text={{
        bold: true
      }}>CVV</FormControl.Label>
        <Input placeholder="CVV " onChangeText={value => setData({ ...formData,
        nameOnCard: value
      })} />
        {'cvv' in errors ? <FormControl.ErrorMessage>Invalid CVV</FormControl.ErrorMessage> : <FormControl.HelperText>
            Invalid CVV
          </FormControl.HelperText>}
      </FormControl>
      <Button onPress={onSubmit} mt="5" bg={'greenWhite'}>
        Add card
      </Button>
          </VStack>
}
        </Pressable>
    </VStack>
      </VStack>
      </ScrollView>
    );
  };
  

  export default PaymentMethodSelector;