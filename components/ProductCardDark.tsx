import React from 'react';
import  { StyleSheet } from 'react-native';
import { useTheme, Text,Button, ITheme, theme, View, ICustomTheme, Badge, Flex, HStack} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


type ProductCardDarkProps = {
  onPress: () => void;
  title: string;
};
const SubscriptionCard = (props: ProductCardDarkProps) => {
    const theme: ICustomTheme = useTheme();


    const styles = StyleSheet.create({
        container: {
          padding:20,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: theme.colors.black,
          flexDirection: 'column',
          margin: 10,
          borderRadius: theme.borders.borderRadius,
          overflow: 'hidden',
        },
      });

    
  return (
    <TouchableOpacity onPress={props.onPress}>
    <View style={styles.container}>
     <HStack alignItems={'center'} justifyContent={'space-between'} w={"100%"} pb={6}>
     <Text fontWeight='extrabold' color='greenBlack' size="xl">{props.title}</Text>
     <AntDesign name="right" size={24} color={'white'} />
     </HStack>
    <Text color='white' size={'lg'}>Starting from</Text>
    <Flex 
    flexDirection='row'alignItems='center'justifyContent='space-between' w="100%">
    <HStack alignItems='baseline' space={2}>
    <Text size="xl" color={'white'} fontWeight={'extrabold'}>{props.title ==="Subscriptions" ? '69' : '10'}</Text><Text color={'white'} pb={1}>{props.title ==="Subscriptions" ? 'kr./md.' : 'kr./ per wash'}</Text>
    </HStack>
    <Badge variant="solid" color={'white'} size={'xl'} borderRadius="sm" px="4" py="2" bg="greenBlack" position="relative" bottom="0" right="0" _text={{
        fontSize: 16
      }}>No signup fee</Badge>
    </Flex>
    </View>
    </TouchableOpacity>
  );
};


export default SubscriptionCard;
