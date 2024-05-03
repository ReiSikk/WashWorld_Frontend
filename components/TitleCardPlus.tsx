import React from 'react'
import { Container, Spacer, Flex, Text, View, useTheme, Button, Input, Box, Heading, Link} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

function TitleCardPlus() {
  return (
    <View>
        <Flex flexDirection="row" bg="grey5" p="6" w="90%" >
<Box>
    <FontAwesome name="plus" size={24} />
<Text>Title</Text>
</Box>
<Spacer />
<Box>
<AntDesign name="right" size={24}/>
</Box>
        </Flex>
    </View>
  )
}

export default TitleCardPlus