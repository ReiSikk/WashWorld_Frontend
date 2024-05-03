import React from 'react'
import { Container, Spacer, Flex, Text, View, useTheme, Button, Input, Box, Heading, Link} from 'native-base';
import { AntDesign } from '@expo/vector-icons';

function TitleCard() {
  return (
    <View>
        <Flex flexDirection="row" bg="grey5" p="6" w="90%" >
<Box>
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

export default TitleCard