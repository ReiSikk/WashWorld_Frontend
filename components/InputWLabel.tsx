import React, { useState } from 'react';
import { VStack, FormControl, Input } from 'native-base';

type InputWLabelProps = {
    label: string;
    placeholder: string;
    helperText: string;
    setValue: (value: string) => void;
    value: any;
};



function InputWLabel({label, placeholder, helperText, setValue, value}: InputWLabelProps) {
    return (
      <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired>
        <FormControl.Label _text={{bold: true}}>{label}</FormControl.Label>
        <Input 
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
        />
      </FormControl>
      </VStack>
    );
  }

  export default InputWLabel;