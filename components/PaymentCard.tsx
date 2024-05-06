import React from 'react';
import { Spacer, Flex, Text, View, Box, HStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

interface PaymentCardProps {
  cardNumber: string;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ cardNumber }) => {
  return (
    <View>
      <HStack bg="grey5" p="4" w="100%" alignItems="center">
        <AntDesign name="creditcard" size={24} color="black" />
          <Text ml="2">{cardNumber}</Text>
      </HStack>
    </View>
  );
}

export default PaymentCard;
