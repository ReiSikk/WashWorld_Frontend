import React, { useState } from 'react';
import { VStack, FormControl, Input } from 'native-base';

type InputWLabelProps = {
    label: string;
    placeholder: string;
    helperText: string;
    formData: any;
    setData: any;
    errors: any;
    validate: any;
};



function InputWLabel({label, placeholder, helperText, formData, setData, errors, validate}: InputWLabelProps) {
    return (
        <VStack width="90%" mx="3" maxW="300px">
        <FormControl isRequired isInvalid={'name' in errors}>
          <FormControl.Label _text={{
          bold: true
        }}>{label}</FormControl.Label>
          <Input placeholder={placeholder}
           onChangeText={value => {
            setData({ ...formData, name: value})
            validate(value);
           }
        } />
          {'name' in errors ? <FormControl.ErrorMessage>{helperText}</FormControl.ErrorMessage> : <FormControl.HelperText>
              Name should contain atleast 3 character.
            </FormControl.HelperText>}
        </FormControl>
      </VStack>
    );
  }

  export default InputWLabel;