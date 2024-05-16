import { Box, Image, AspectRatio, Center, Stack, Heading, Text, HStack,VStack, Badge } from 'native-base';
import React from 'react';
import { useTheme, ICustomTheme } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import  { StyleSheet, TouchableOpacity } from 'react-native';






const SquareCard = () => {

    const theme: ICustomTheme = useTheme();
    
    const styles = StyleSheet.create({
        container: {
          padding: 10,
          maxHeight: 300,
          maxWidth: 225,
          width: "100%",
          alignItems: 'flex-start',
        },
      });


    return(
      <TouchableOpacity>
     <Box alignItems="center" style={styles.container}>
             <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
             borderColor: "coolGray.600",
             backgroundColor: "gray.700"
           }} _web={{
             shadow: 2,
             borderWidth: 0
           }} _light={{
             backgroundColor: "gray.50"
           }}>
               <Box>
                 <AspectRatio w="100%" ratio={16 / 9}>
                   <Image source={require('../assets/images/washLocation.png')} alt="image"   resizeMode="cover" 
                   w="100%"
                   height="100%" />
                 </AspectRatio>
                 <Badge variant="solid" borderRadius="sm" px="4" py="2" bg="orange" _text={{
                  fontWeight: "extrabold",
                  fontSize: "sm"
                 }} position="absolute" bottom="0" right="0">2.2KM</Badge>
               </Box>
               <VStack p="4" space={3} bg='greenWhite'>
                 <HStack space={2} justifyContent={'space-between'} alignItems={'center'}>
                   <Heading size="lg" ml="-1" color={'white'} >
                     WashStation
                   </Heading>
                   <AntDesign name="right" size={24} color={'white'} />
                 </HStack>
                 <Text color={'white'}>
                   WashStation.address
                 </Text>
                 <HStack alignItems="center" space={4} justifyContent="space-between">
                   <HStack alignItems="center">
                   </HStack>
                 </HStack>
               </VStack>
             </Box>
     </Box>
     </TouchableOpacity>
    ) 
  };

  export default SquareCard;