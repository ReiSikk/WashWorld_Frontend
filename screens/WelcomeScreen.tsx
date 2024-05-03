import React from 'react';
import { Container, Text, View, useTheme, Button, Input, Box, Heading, Link} from 'native-base';
import  { StyleSheet} from 'react-native';

function WelcomeScreen() {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
<View style={styles.container}>
      <Box safeArea>
      <Box alignItems="center">
        <Heading size="xl" fontWeight="600" color="white" py="10">
          WashWorld
        </Heading>
     
        <Button w="80%" maxWidth="300px" bg="greenBlack">Sign up</Button>
      </Box>
      <Link _text={{
            fontSize: "sm",
            fontWeight: "500",
            color: "white"
          }} alignSelf="center" mt="1" py="2">
Have an account? Log in instead
            </Link>
      </Box>
    </View>
  );
}


const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "black",
    },
  });

export default WelcomeScreen;