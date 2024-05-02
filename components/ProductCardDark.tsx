import React from 'react';
import  { StyleSheet, Text } from 'react-native';
import { useTheme, Button, ITheme, theme, View} from 'native-base';

const SubscriptionCard = () => {
    const theme = useTheme();

    
  return (
    <View style={styles.container}>
     <View style={styles.arrowContainer}>
     <Text style={styles.title}>Title</Text>
     <Text style={styles.arrow}>Arrow</Text>
     </View>
    <Text style={styles.description}>Description</Text>
    <Text style={styles.price}>Price</Text>
    <View>
        <Button colorScheme="primary" backgroundColor={'black'} color={'white'} size={'lg'}>Subscribe</Button>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.black,
      flexDirection: 'column',
      margin: 10,
    },
    textContainer: {
      flex: 1,
    },
    arrowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    title: {
      color: '#fff',
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
    cta: {
        backgroundColor: theme.colors.white[500],
    }

  });

export default SubscriptionCard;
