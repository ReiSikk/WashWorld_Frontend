import React from 'react';
import { Spacer, Flex, Text, View, Box } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

interface TitleCardPlusProps {
  title: string;
}

const TitleCardPlus = ({ title }: TitleCardPlusProps) => {
  return (
    <View shadow={2}>
      <Flex flexDirection="row" bg="grey5" py="8" px="4" w="100%" alignItems="center">
        <Flex flexDirection="row">
          <AntDesign name="plus" size={24} color="black" />
          <Text px="2">{title}</Text>
        </Flex>
        <Spacer />
        <Box>
          <AntDesign name="right" size={24} />
        </Box>
      </Flex>
    </View>
  );
}

export default TitleCardPlus;
