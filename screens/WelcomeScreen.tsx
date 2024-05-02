import React from 'react';
import { Container, Text, View, useTheme, Button, Input } from 'native-base';
import  { StyleSheet} from 'react-native';

function WelcomeScreen() {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <Container>
      <Text fontSize="4xl">
        WashWorld
      </Text>
<Button size="lg" shadow={2} colorScheme="primary.500">Add me</Button>
<Text mt="3" fontWeight="semibold" fontSize="18">
            Marketing License
          </Text>
    </Container>
  );
}

const getStyles = (theme: any) =>StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary.black,
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

});

export default WelcomeScreen;