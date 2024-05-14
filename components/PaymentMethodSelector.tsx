import React, { useState, useEffect } from 'react';
import { Text, VStack, Button, Icon, Pressable, HStack, FormControl,Input, ScrollView } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { CreateCardDTO } from '../entities/CreateCardDTO';
import { createCard } from '../store/CardSlice';
import moment from 'moment';
import dayjs from 'dayjs';


type FieldName = 'nameOnCard' | 'cardNumber' | 'expirationDate' | 'cvv';

const PaymentMethodSelector = () => {
  const dispatch: AppDispatch = useDispatch();
  
  const [showForm, setShowForm] = useState(false);
  const [cardAdded, setCardAdded] = useState(false);
  const [formData, setFormData] = React.useState({
    nameOnCard: "",
    cardNumber: "",
    expirationDate: new Date(),
    cvv: "",
  });
  const newCard = new CreateCardDTO(formData.nameOnCard, formData.cardNumber, formData.expirationDate, formData.cvv);
  const [expirationDateInput, setExpirationDateInput] = React.useState('');
  console.log(formData, 'formData');

  const [errors, setErrors] = useState({ nameOnCard: '', cardNumber: '', expirationDate: '', cvv: ''});
  const [date, setDate] = useState<any>(dayjs());
  const formatDate = (date: dayjs.Dayjs) => {
    return dayjs(date).format('MM/YYYY');
  };

const [paymentMethods, setPaymentMethods] = useState(['']);
const [selectedMethod, setSelectedMethod] = useState('');

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






const handleSubmit = () => {
  dispatch(createCard(newCard))
  .then(() => {
    // Entry added successfully
    setCardAdded(true);
  })
  .catch(error => {
    // Handle error if entry addition fails
    console.error('Error adding card:', error);
  });
};

const handleValidation = (fieldName: FieldName) => {
  let newErrors = {
    [fieldName]: '',
  };
  if (fieldName === 'nameOnCard' && formData.nameOnCard.length < 2) {
    newErrors.nameOnCard = 'Name needs to be longer than 1 character';
  }
  if (fieldName === 'cardNumber' && formData.cardNumber.trim() === '') {
    newErrors.cardNumber = 'Card number cannot be empty';
  }
  if (fieldName === 'expirationDate' && !formData.expirationDate) {
    newErrors.expirationDate = 'Expiration date cannot be empty';
  }
  if (fieldName === 'cvv' && formData.cvv.trim() === '') {
    newErrors.cvv = 'CVV cannot be empty';
  }

  setErrors(prev => ({ ...prev, ...newErrors }));
  return newErrors;
};

const handleInputChange = (name, value) => {
  setFormData(prev => ({ ...prev, [name]: value }));
  // Clear errors when user starts typing again
  if (errors[name]) {
    setErrors(prev => ({ ...prev, [name]: '' }));
  }
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
            <Icon as={AntDesign} name={'plus'} size={4} color={'black'}  />
            <Text>Pay with Mobile Pay</Text>
            <AntDesign name="right" size={14} marginLeft={'auto'} />
          </HStack>
        </Pressable>
            <Pressable 
          color={'black'}
          padding={4}
          borderRadius={4}
        >
            <Pressable onPress={() => setShowForm(!showForm)}>
          <HStack space={2} justifyContent={'flex-start'} alignItems={'center'}>
            <Icon as={AntDesign} name={showForm ? 'minus' : 'plus'} size={4} color={'black'}  />
            <Text>Add a payment card</Text>
            <AntDesign name={showForm ? 'down' : 'right' } size={14} marginLeft={'auto'} />
          </HStack>
            </Pressable>
          {showForm && 
            <VStack width="100%" space={4} py={6}>
            <FormControl isRequired isInvalid={errors.nameOnCard}>
              <FormControl.Label _text={{ bold: true }}>Name on card</FormControl.Label>
              <Input
                placeholder="John Doe"
                maxLength={255}
                onChangeText={value => handleInputChange('nameOnCard', value)}
                onBlur={() => handleValidation('nameOnCard')}
                value={formData.nameOnCard}
              />
              {errors.nameOnCard && <Text color={'error.500'} fontSize={'sm'}>{errors.nameOnCard}</Text>}
            </FormControl>
            <FormControl isRequired isInvalid={errors.cardNumber}>
              <FormControl.Label _text={{ bold: true }}>Card number</FormControl.Label>
              <Input
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                onChangeText={value => handleInputChange('cardNumber', value)}
                onBlur={() => handleValidation('cardNumber')}
                value={formData.cardNumber}
              />
              {errors.cardNumber && <Text color={'error.500'} fontSize={'sm'}>{errors.cardNumber}</Text>}
            </FormControl>
            <HStack space={4} flex={1}>
              <FormControl isRequired isInvalid={errors.expirationDate} flex={2}>
                <FormControl.Label _text={{ bold: true }}>Expiration date</FormControl.Label>
                <Input
                  placeholder="MM/YY"
                  onChangeText={value => handleInputChange('expirationDate', moment(value, 'MM/YY').format('MM/YY'))}
                  onBlur={() => handleValidation('expirationDate')}
                  value={formData.expirationDate}
                />
                {errors.expirationDate && <Text color={'error.500'} fontSize={'sm'}>{errors.expirationDate}</Text>}
              </FormControl>
              <FormControl isRequired isInvalid={errors.cvv} flex={1}>
                <FormControl.Label _text={{ bold: true }}>CVV</FormControl.Label>
                <Input
                  placeholder="CVV"
                  maxLength={4}
                  onChangeText={value => handleInputChange('cvv', value)}
                  onBlur={() => handleValidation('cvv')}
                  value={formData.cvv}
                />
                {errors.cvv && <Text color={'error.500'} fontSize={'sm'}>{errors.cvv}</Text>}
              </FormControl>
            </HStack>
            <Button onPress={handleAddPaymentCard} mt="5" bg={'greenWhite'}>
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