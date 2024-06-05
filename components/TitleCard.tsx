import React from 'react';
import { Spacer, Flex, Text, View, Box } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface TitleCardProps {
  title: string;
  onPress?: () => void;
}

const TitleCard: React.FC<TitleCardProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View shadow={1}>
      <Flex flexDirection="row" bg="grey5" py="8" px="4" w="100%" alignItems="center">
          <Text>{title}</Text>
        <Spacer />
          <AntDesign name="right" size={24} />
      </Flex>
    </View>
    </TouchableOpacity>
  );
}

export default TitleCard;