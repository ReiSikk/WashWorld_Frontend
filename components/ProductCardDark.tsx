import React from 'react';
import  { StyleSheet, Text } from 'react-native';
import { useTheme, Button, ITheme, theme, View, ICustomTheme, Box} from 'native-base';
import { AntDesign } from '@expo/vector-icons';

const SubscriptionCard = () => {
    const theme: ICustomTheme = useTheme();


    const styles = StyleSheet.create({
        container: {
          padding: 20,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: theme.colors.black,
          flexDirection: 'column',
          margin: 10,
          borderRadius: theme.borders.borderRadius,
          overflow: 'hidden',
          
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
        startingFrom: {
          color: 'colors.white',
          fontSize: 18,
        },
        price: {
          color: theme.colors.white,
          fontSize: theme.fontSizes.extraLarge,
          fontFamily: theme.fonts.extraBold,
        },
        noSignUpFeeText: {
          color: '#000',
          fontSize: 14,
          fontWeight: 'bold',
        },
        arrow: {
          fontSize: 24,
          fontWeight: 'bold',
          marginLeft: 10,
        },
        row: {
            flexDirection: 'row',
            gap: 10,
            alignItems: 'baseline',
        },
        flexEnd: {
            marginTop: 30,
            width: '100%',
            flexDirection: 'row', // Align children horizontally
            alignItems: 'center', // Align children vertically in the center
            justifyContent: 'space-between', // Space between the price text and the banner
            backgroundColor: theme.colors.black,
        },
        bottomCont: {
            flexDirection: 'row',
            alignItems: 'baseline', // Align text by text baseline
            zIndex: 20, // Ensure the price is above the banner
        },
        greenBanner: {
            backgroundColor: theme.colors.greenBlack,
            height: 50,
            width: "66%",
            paddingLeft: 60, 
            justifyContent: 'center', 
            overflow: 'hidden', 
            position: 'relative', 
        },
        bannerAngle: {
            backgroundColor: theme.colors.black,
            width: 100,
            zIndex: 15, // Ensure the angle is above the banner
            height: 200,
            position: 'absolute',
            left: 100,
            bottom: 0,
            transform: [{ rotate: '30deg' }],
        },
        greenBannerText: {
            color: theme.colors.white,
            fontSize: theme.fontSizes.medium,
            fontFamily: theme.fonts.extraBold,
            position: 'absolute',
            right: 25, 
            bottom: 15, 
        },
      });

    
  return (
    <View style={styles.container}>
     <View style={styles.arrowContainer}>
     <Text style={styles.title}>CardTitle</Text>
     <AntDesign name="right" size={24} color={theme.colors.white} />
     </View>
    <Text style={styles.startingFrom}>Starting from</Text>
    <View style={styles.flexEnd}>
    <View style={styles.bottomCont}>
    <Text style={styles.price}>69</Text><Text style={{color: theme.colors.white}}>kr./md.</Text>
    </View>
        <Box style={styles.bannerAngle}></Box>
    <View style={styles.greenBanner}>
        <Text style={styles.greenBannerText}>No sign up fee!</Text>
    </View>
    </View>
  </View>
  );
};






export default SubscriptionCard;
