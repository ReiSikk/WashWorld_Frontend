import React from 'react';
import { Spacer, Flex, Text, View, Box } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

interface TitleCardProps {
  title: string;
}

const TitleCard: React.FC<TitleCardProps> = ({ title }) => {
  return (
    <View>
      <Flex flexDirection="row" bg="grey5" py="8" px="4" w="100%" alignItems="center">
          <Text>{title}</Text>
        <Spacer />
          <AntDesign name="right" size={24} />
      </Flex>
    </View>
  );
}

export default TitleCard;