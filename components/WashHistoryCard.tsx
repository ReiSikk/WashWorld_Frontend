import React from 'react';
import { Spacer, Flex, Text, View, Box, HStack, Container, Center, Badge} from 'native-base';
import { AntDesign } from '@expo/vector-icons';

interface WashHistoryCardProps {
  washStation: string;
  washType: string;
}

const WashHistoryCard: React.FC<WashHistoryCardProps> = ({ washStation, washType }) => {
  return (
    <View>
        <Flex>
            <Flex alignSelf="flex-end">
        <Container w="20" h="8" bg="greenWhite" alignItems="center" justifyContent="center">
            <Text color="white">21/04/24</Text>
            </Container> 
            </Flex> 
      <HStack bg="grey5" py="8" px="4" w="100%" alignItems="center">
        <Text>{washStation} - </Text>
          <Text>{washType}</Text>
        </HStack>
        </Flex>
    </View>
  );
}

export default WashHistoryCard;

