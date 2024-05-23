import React, { useEffect } from 'react';
import { Text, View, HStack, Badge, Container, Flex } from 'native-base';
import { AppDispatch,RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';


const MembershipCard = () => {
  const member = useSelector((state: RootState) => state.member.member);

  return (
    <View mb="6">
      <Flex bg="grey5" w="100%" h="200" p="6" shadow="4" borderRadius="sm">
        <Text size="xl" fontWeight="extrabold" color="greenWhite">{member?.firstName} {member?.lastName}</Text>
        <Text size="lg" fontWeight="extrabold" mb="6">Premium Membership</Text>
        <Badge variant="solid" alignSelf="flex-start" px="4" bg={member?.active ? "greenWhite" : "gray.500"}>{member?.active ? "Active" : "Not active"}</Badge>
        </Flex>
    </View>
  );
}

export default MembershipCard;
