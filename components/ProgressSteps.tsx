import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'native-base';

type ProgressStepsProps = {
    currentStep: number;
    totalSteps: number;
    };
  
    const ProgressSteps = ({ currentStep, totalSteps }: ProgressStepsProps) => {

        const theme = useTheme();
        const styles = StyleSheet.create({
            container: {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            },
            stepContainer: {
              flexDirection: 'row',
              alignItems: 'center',
            },
            step: {
              width: 20,
              height: 20,
              borderRadius: 10,
              borderStyle: 'solid',
                borderWidth: 1.5,
                borderColor: theme.colors.greenWhite,
            },
            activeStep: {
              backgroundColor: theme.colors.greenWhite,
            },
            inactiveStep: {
                backgroundColor: 'transparent',
            },
            dash: {
              width: 20,
              height: 2,
              borderBottomWidth: 1.5,
              borderBottomColor: theme.colors.grey60,
              marginLeft: 5,
              marginRight: 5,
            },
          });

    return (
            <View style={styles.container}>
      {Array.from({ length: totalSteps }, (_, index) => (
          <View key={index} style={styles.stepContainer}>
          <View style={[styles.step, index === currentStep ? styles.activeStep : styles.inactiveStep]} />
          {index !== totalSteps - 1 && <View style={styles.dash} />}
        </View>
      ))}
    </View>
  );
};



export default ProgressSteps;
