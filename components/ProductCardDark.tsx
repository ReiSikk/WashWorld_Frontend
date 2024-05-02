import React from 'react';
import  { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'native-base';

const SubscriptionCard = () => {
    const theme = useTheme();
    const styles = getStyles(theme);
    
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Title</Text>
    <Text style={styles.description}>Description</Text>
    <Text style={styles.price}>Price</Text>
    <View style={styles.noSignUpFee}>
      <Text style={styles.noSignUpFeeText}>No Sign Up Fee</Text>
    </View>
    <Text style={styles.arrow}>Arrow</Text>
  </View>
  );
};

const getStyles = (theme: any) =>StyleSheet.create({
    container: {
      backgroundColor: '#333',
      padding: 20,
      borderRadius: 10,
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexDirection: 'column',
      margin: 10,
    },
    textContainer: {
      flex: 1,
    },
    title: {
      color: '#fff',
      fontSize: theme.fontSizes.large,
      fontWeight: 'bold',
    },
    description: {
      color: '#ccc',
      fontSize: 18,
    },
    price: {
      color: '#0f0',
      fontSize: 32,
      fontWeight: 'bold',
    },
    noSignUpFee: {
      backgroundColor: '#0f0',
      padding: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    noSignUpFeeText: {
      color: '#000',
      fontSize: 14,
      fontWeight: 'bold',
    },
    arrow: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: 10,
    },
  });

export default SubscriptionCard;
