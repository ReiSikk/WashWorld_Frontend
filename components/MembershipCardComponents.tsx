import React, { useEffect } from 'react';
import { Text, View, HStack, Badge, Container, Flex, Spacer } from 'native-base';
import { AppDispatch,RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { getMemberDetails, getProfile } from '../store/MemberSlice';


const MembershipCard = () => {
  const dispatch: AppDispatch = useDispatch();
  const member = useSelector((state: RootState) => state.member.member);
 useEffect(() => {
  dispatch(getProfile());
 },[member])




  return (
    <View mb="6">
      <Flex bg="grey5" w="100%" h="200" p="6" shadow="4" borderRadius="sm">
        <HStack alignItems="center" justifyContent="space-between" w="100%" mt="0" mb="0">
        <Text size={'xl'} fontWeight="extrabold" color="greenWhite">{member?.firstName} {member?.lastName}</Text>
        <Badge variant="solid" alignSelf="flex-start" px={4} py={2} bg={member?.active ? "greenWhite" : "gray.500"}>{member?.active ? "Active" : "Not active"}</Badge>
        </HStack>
        {member?.role === 'admin' && <Text
        variant="solid" color="greenWhite" fontSize={'lg'} mb={2} fontFamily={'extrabold'}>Administrator</Text>}
        <Text size="md" fontWeight="medium" mb="6">{member?.email}</Text>
        <Spacer />
        <HStack alignItems="center" justifyContent="space-between" w="100%" mt="0" pb="0">
        <Text size="md" fontFamily={'medium'}  mb="6">Loyalty points: {member?.loyaltyPoints}</Text>
        </HStack>
        </Flex>
    </View>
  );
}

export default MembershipCard;
