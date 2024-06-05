import React, {useEffect, useState} from 'react'
import { ITheme, Text, useTheme, HStack, ScrollView, Icon, FormControl, Input, Button, VStack } from 'native-base'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from "@expo/vector-icons";
import Picture from '../components/Picture';
import { Image } from 'react-native';
import { CreateSupportTicket } from '../entities/CreateSupportTicket';

type Props = NativeStackScreenProps<RootStackParamList, "SupportTicketScreen">

 function SupportTicketScreen({ navigation }: Props) {
const dispatch: AppDispatch = useDispatch();
const [camera, setCamera] = useState(false);
const [photoToDisplay, setPhotoToDisplay] = useState('')

const [supportTicketForm, setSupportTicketForm] = useState({
description: "",
photo: ""
});

const newSupportTicket = new CreateSupportTicket(supportTicketForm.description, supportTicketForm.photo);

const handleSubmit = () => {
  console.log(supportTicketForm)
  /* dispatch(createEntry(newSupportTicket))
  .then(() => {
    // Entry added successfully
    setEntryAdded(true);
  })
  .catch(error => {
    // Handle error if entry addition fails
    console.error('Error adding expense:', error);
  }); */
  }


  return (
     <ScrollView m={6}>
      <VStack space={4}>
      <Text size="lg">Report a problem</Text>
      <FormControl.Label>Describe your problem</FormControl.Label>
        <Input type="text" placeholder="Your problem" autoCapitalize="none" onChangeText={(value: string) =>  setSupportTicketForm({ ...supportTicketForm, description: value })} />
      <Button onPress={() => setCamera(true)} bg="black">Add a picture</Button>
      {camera ? 
 <Picture 
 setCamera={setCamera}
  setPhotoToDisplay={setPhotoToDisplay}
  photoToDto={(photo: string) => setSupportTicketForm({...supportTicketForm, photo})}
  ></Picture> : null }
       <Button onPress={handleSubmit}>Submit</Button>
       </VStack>
    </ScrollView>
  )
}

export default SupportTicketScreen