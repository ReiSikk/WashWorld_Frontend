import React, { useState, useEffect } from 'react';
import { Text, VStack, Button, Icon, Pressable, HStack, FormControl, Input, ScrollView, Badge } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { CreateCardDTO } from '../entities/CreateCardDTO';
import { createCard, fetchCards } from '../store/CardSlice';
import { parse, isValid, endOfMonth, set } from 'date-fns';
import { useSelector } from 'react-redux';
import { setSelectedPaymentMethodID } from '../store/SubscriptionSlice';
import { MemberPaymentCardQueries } from '../api/MemberPaymentCardQueries';

const PaymentMethodSelector: React.FC = () => {
  //redux
  const dispatch: AppDispatch = useDispatch();
  const cardsFromStore = useSelector((state: RootState) => state.cards);
  const cardsToDisplay = cardsFromStore.cards;
  const selectedPaymentMethodID = useSelector((state: RootState) => state.subscription.selectedPaymentMethodID);
  
  const [showForm, setShowForm] = useState(false);
  const [cardAdded, setCardAdded] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('');

  //console.log(selectedMethod, "selectedMethod in PaymentMethodSelector")


  const [formData, setFormData] = useState({
    nameOnCard: "",
    cardNumber: "",
    expirationDate: new Date(), // Store the actual date object
    cvv: "",
  });
  const [expirationDateStr, setExpirationDateStr] = useState('');

  const [errors, setErrors] = useState({ nameOnCard: '', cardNumber: '', expirationDate: '', cvv: '' });


useEffect(() => {
  dispatch(fetchCards());
}, [dispatch]);


//useffect to setpaymentmethods


  const handleSubmit = () => {
    const nameErrors = handleValidation();
    const cardNumberErrors = handleValidation();
    const expirationDateErrors = handleValidation();
    const cvvErrors = handleValidation();

    // Check if there are any errors
    let hasErrors = false;

    if (nameErrors.nameOnCard) {
      hasErrors = true;
    }
    
    if (cardNumberErrors.cardNumber) {
      hasErrors = true;
    }
    
    if (expirationDateErrors.expirationDate) {
      hasErrors = true;
    }
    
    if (cvvErrors.cvv) {
      hasErrors = true;
    }
    
    if (hasErrors) {
      alert('Please fix the errors before submitting the form');
      return;
    }

    const newCard: CreateCardDTO = {
      nameOnCard: formData.nameOnCard,
      cardNumber: formData.cardNumber,
      expirationDate: formData.expirationDate,
      cvv: formData.cvv,
    };

    dispatch(createCard(newCard))
      .then(() => {
        setCardAdded(true);
      })
      .catch(error => {
        console.error('Error adding card:', error);
      });
  };

  const handleValidation = () => {
    const { nameOnCard, cardNumber, expirationDate, cvv } = formData;
    const newErrors = { nameOnCard: '', cardNumber: '', expirationDate: '', cvv: '' };
  
    if (nameOnCard.trim().length < 2) {
      newErrors.nameOnCard = 'Name needs to be longer than 1 character';
    }
  
    if (cardNumber.trim() === '') {
      newErrors.cardNumber = 'Card number cannot be empty';
    }
  
    const [month, year] = expirationDateStr.split('/').map(Number);
    const expDate = new Date(`${year + 2000}-${month}-01`);
    if (!isValid(expDate)) {
      newErrors.expirationDate = 'Invalid expiration date';
    } else if (expDate < new Date()) {
      newErrors.expirationDate = 'Expiration date cannot be in the past';
    }
  
    if (cvv.trim() === '') {
      newErrors.cvv = 'CVV cannot be empty';
    }
  
    setErrors(newErrors);
    return newErrors;
  };

  const handleExpirationDateChange = (value: string) => {
    const numericValue = value.replace(/\D/g, '');

    if (numericValue.length <= 4) {
      const month = numericValue.slice(0, 2);
      const year = numericValue.slice(2, 4);

      const formattedValue = `${month}${year ? ' / ' + year : ''}`;
      setExpirationDateStr(formattedValue);

      if (month.length === 2 && year.length === 2) {
        let dateObject = parse(`20${year}-${month}-01`, 'yyyy-MM-dd', new Date());
        if (isValid(dateObject)) {
            // Get the end of the month
            dateObject = endOfMonth(dateObject);
          setFormData({ ...formData, expirationDate: dateObject });
        }
      }
    }
  };

  const changeCardDefaultState = async (cardId: number) => {
    console.log(cardId, "cardId in changeCardDefaultState")
    const cardToUpdate = cardsToDisplay.find(card => card.id === cardId);
    const currentStatus = cardToUpdate?.isDefaultMethod;
    const updatedStatus = !currentStatus;

    const updatedCard = await MemberPaymentCardQueries.updateMemberPaymentCard(cardId, updatedStatus);

    dispatch(fetchCards());
  } 


  return (
    <ScrollView mb={20}>
      <VStack space={4}>
        <Text size={'xl'} fontWeight={'extrabold'}>
          Wallet
        </Text>
        <VStack space={0}>
          <Text fontWeight={'extrabold'} color={'greenWhite'} size={'lg'}>
            My payment methods
          </Text>
          <Text fontSize="sm" color="grey60">
            {!cardsFromStore.cards.length ? 'No saved payment methods found, add one to continue' : 'Select your payment method to continue'}
          </Text>
        </VStack>
        <VStack space={4}>
          {cardsFromStore && cardsFromStore.cards.length > 0 ?
          
         ( cardsToDisplay.map((method, index) => (
            <Pressable
              key={index}
              color={'black'}
              padding={4}
              bg={selectedMethod === method.cardNumber ? 'greenWhite' : 'grey10'}
              borderRadius={4}
              onPress={() => dispatch(
                setSelectedPaymentMethodID(method.id),
                setSelectedMethod(method.cardNumber)
              )}
            > 
              <HStack space={2} justifyContent={'flex-start'} alignItems={'center'}>
                <VStack space={0}>
              <HStack space={2} justifyContent={'flex-start'} alignItems={'center'}>
                <Text>{method.nameOnCard}</Text>
                <Text>{method.cardNumber}</Text>
              </HStack>
              <Text fontSize="sm" color={method.isActive ? "greenWhite" : 'grey60'} width={'fit-content'}  marginRight={'auto'}>
                {method.isActive ? 'Active' : ''}
              </Text>
              <Button fontSize="sm" color={method.isDefaultMethod ? "greenWhite" : 'grey60'} width={'fit-content'}  marginRight={'auto'} 
              onPress={() => {
                if (parseInt(selectedPaymentMethodID) === method.id) {
                  changeCardDefaultState(method.id);
                }
              }}
              >
                {method.isDefaultMethod ? 'Default' : 'Set as default method'}
              </Button>
              </VStack>
                <AntDesign name="right" size={14} marginLeft={'auto'} />
              </HStack>
            </Pressable>
          ))) : 
          (
            null
          )
          }
          <Pressable
            color={'black'}
            padding={4}
            borderRadius={4}
            onPress={() => setSelectedMethod('Mobile Pay')}
          >
            <HStack space={2} justifyContent={'flex-start'} alignItems={'center'}>
              <Icon as={AntDesign} name={'plus'} size={4} color={'black'} />
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
                <Icon as={AntDesign} name={showForm ? 'minus' : 'plus'} size={4} color={'black'} />
                <Text>Add a payment card</Text>
                <AntDesign name={showForm ? 'down' : 'right'} size={14} marginLeft={'auto'} />
              </HStack>
            </Pressable>
            {showForm && (
              <VStack width="100%" space={4} py={6}>
                <FormControl isRequired>
                  <FormControl.Label _text={{ bold: true }}>Name on card</FormControl.Label>
                  <Input
                    placeholder="John Doe"
                    maxLength={255}
                    onChangeText={value => setFormData({ ...formData, nameOnCard: value })}
                    onBlur={() => handleValidation()}
                    value={formData.nameOnCard}
                  />
                  {errors.nameOnCard && <Text color={'error.500'} fontSize={'sm'}>{errors.nameOnCard}</Text>}
                </FormControl>
                <FormControl isRequired>
                  <FormControl.Label _text={{ bold: true }}>Card number</FormControl.Label>
                  <Input
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    onChangeText={value => setFormData({ ...formData, cardNumber: value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim() })}
                    onBlur={() => handleValidation()}
                    value={formData.cardNumber}
                  />
                  {errors.cardNumber && <Text color={'error.500'} fontSize={'sm'}>{errors.cardNumber}</Text>}
                </FormControl>
                <HStack space={4} flex={1}>
                  <FormControl isRequired flex={2}>
                    <FormControl.Label _text={{ bold: true }}>Expiration date</FormControl.Label>
                    <Input
                      type="text"
                      placeholder="MM/YY"
                      value={expirationDateStr} // Ensure this is a string
                      onChangeText={handleExpirationDateChange}
                      onBlur={() => handleValidation()}
                    />
                    {errors.expirationDate && <Text color={'error.500'} fontSize={'sm'}>{errors.expirationDate}</Text>}
                  </FormControl>
                  <FormControl isRequired flex={1}>
                    <FormControl.Label _text={{ bold: true }}>CVV</FormControl.Label>
                    <Input
                      placeholder="CVV"
                      maxLength={4}
                      onChangeText={value => setFormData({ ...formData, cvv: value })}
                      onBlur={() => handleValidation()}
                      value={formData.cvv}
                    />
                    {errors.cvv && <Text color={'error.500'} fontSize={'sm'}>{errors.cvv}</Text>}
                  </FormControl>
                </HStack>
                <Button onPress={handleSubmit} mt="5" bg={'greenWhite'} >
                  Add card
                </Button>
              </VStack>
            )}
          </Pressable>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default PaymentMethodSelector;
