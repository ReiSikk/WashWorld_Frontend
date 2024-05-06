import { Box, Image, AspectRatio, Center, Stack, Heading, Text, HStack } from 'native-base';
import React from 'react';
import { useTheme, ICustomTheme } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import  { StyleSheet } from 'react-native';






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
        textContainer: {
          flex: 1,
        },
        arrowContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: 25,
        },
        title: {
          color: theme.colors.greenBlack,
          fontSize: theme.fontSizes.extraLarge,
          fontFamily: theme.fonts.extraBold,
          zIndex: 25,
        },
        cardTitle: {
            color: theme.colors.white,
            fontSize: theme.fontSizes.extraLarge,
            fontFamily: theme.fonts.extraBold,
        },
        body: {
            fontFamily: theme.fonts.regular,
            fontSize: theme.fontSizes.medium,
        },
   
        arrow: {
          fontSize: 24,
          fontWeight: 'bold',
          marginLeft: 10,
        },
        flexEnd: {
            marginTop: 30,
            width: '100%',
            flexDirection: 'row', // Align children horizontally
            alignItems: 'center', // Align children vertically in the center
            justifyContent: 'space-between', // Space between the price text and the banner
            backgroundColor: theme.colors.black,
        },
        orangeBackground: {
            backgroundColor: theme.colors.orange,
            color: theme.colors.white,
        },
        greenBackground: {
            backgroundColor: theme.colors.greenWhite,
            color: theme.colors.white,
        },
        white: {
            color: theme.colors.white,
        },
      });


    return(
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
                   height="100%"/>
                 </AspectRatio>
                 <Center bg="theme.colors.greenWhite" style={styles.orangeBackground} _dark={{
                 bg: "theme.colors.greenBlack"
               }} _text={{
                 color: theme.colors.white,
                 fontWeight: theme.fontWeights.extrabold,
                 fontSize: theme.fontSizes.labelSmall
               }} position="absolute" bottom="0" right="0" px="3" py="1.5">
                   2.2KM
                 </Center>
               </Box>
               <Stack p="4" space={3} style={styles.greenBackground}>
                 <HStack space={2} justifyContent={'space-between'} alignItems={'center'}>
                   <Heading size="2xl" ml="-1"  style={[styles.white, styles.cardTitle]} >
                     WashStation
                   </Heading>
                   <AntDesign name="right" size={24} color={theme.colors.white} />
                 </HStack>
                 <Text style={[styles.body, styles.white]}>
                   WashStation.address
                 </Text>
                 <HStack alignItems="center" space={4} justifyContent="space-between">
                   <HStack alignItems="center">
                     <Text color="theme.colors.white" style={styles.white} _dark={{
                     color: "warmGray.200"
                   }} fontWeight="400">
                       6 mins away
                     </Text>
                   </HStack>
                 </HStack>
               </Stack>
             </Box>
     </Box>
    ) 
  };

  export default SquareCard;