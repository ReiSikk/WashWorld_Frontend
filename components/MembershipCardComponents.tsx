import React, { useEffect } from 'react';
import { Text, View, HStack, Badge, Container, Flex } from 'native-base';
import { AppDispatch,RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { getMemberDetails } from '../store/MemberSlice';


const MembershipCard = () => {
  const dispatch: AppDispatch = useDispatch();
  const member = useSelector((state: RootState) => state.member.member);
  const memberID = useSelector((state: RootState) => state.member.memberID);
 useEffect(() => {
  if(memberID && memberID !== null) {
    const memberIDNumber = parseInt(memberID);
    dispatch(getMemberDetails(memberIDNumber));
  }
 },[memberID])




  return (
    <View mb="6">
      <Flex bg="grey5" w="100%" h="200" p="6" shadow="4" borderRadius="sm">
        <HStack alignItems="center" justifyContent="space-between" w="100%" mt="0" mb="2">
        <Text size="xl" fontWeight="extrabold" color="greenWhite">{member?.firstName} {member?.lastName}</Text>
        <Badge variant="solid" alignSelf="flex-start" px={4} py={2} bg={member?.active ? "greenWhite" : "gray.500"}>{member?.active ? "Active" : "Not active"}</Badge>
        </HStack>
        <Text size="lg" fontWeight="extrabold" mb="6">Premium Membership</Text>
        <HStack alignItems="center" justifyContent="space-between" w="100%" mt="4" mb="0">
        <Text size="md" fontFamily={'medium'}  mb="6">Loyalty points: {member?.loyaltyPoints}</Text>
        </HStack>
        </Flex>
    </View>
  );
}

export default MembershipCard;
