import React from 'react';
import { Text, View, HStack, Badge } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

interface MembershipCardProps {
  cardNumber: string;
}

const MembershipCard: React.FC<MembershipCardProps> = ({ cardNumber }) => {
  return (
    <View>
        <Text>Card</Text>
    </View>
  );
}

export default MembershipCard;
