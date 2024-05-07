import React from 'react';
import { Text, View, HStack, Badge, Container, Flex } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

interface MembershipCardProps {
  
}

const MembershipCard: React.FC<MembershipCardProps> = ({ }) => {
  return (
    <View mb="6">
      <Flex bg="grey5" w="100%" h="200" p="6" shadow="4" borderRadius="sm">
        <Text size="xl" fontWeight="extrabold" color="greenWhite">Jens Christensen</Text>
        <Text size="lg" fontWeight="extrabold" mb="6">Premium Membership</Text>
        <Badge variant="solid" alignSelf="flex-start" px="4" bg="greenWhite">Active</Badge>
        </Flex>
    </View>
  );
}

export default MembershipCard;
