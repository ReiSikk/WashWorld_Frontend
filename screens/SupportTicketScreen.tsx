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
import { createTicket } from '../store/SupportTicketSlice';


type Props = NativeStackScreenProps<RootStackParamList, "SupportTicketScreen">

 function SupportTicketScreen({ navigation }: Props) {
const dispatch: AppDispatch = useDispatch();
const tickets = useSelector((state: RootState) => state.supportTickets.supportTickets);
const [camera, setCamera] = useState(false);
const [photoToDisplay, setPhotoToDisplay] = useState('')
const [ticketSubmitted, setTicketSubmitted] = useState(false)

const [supportTicketForm, setSupportTicketForm] = useState({
description: "",
photo: ""
});



const newSupportTicket = new CreateSupportTicket(supportTicketForm.description, supportTicketForm.photo);

const handleSubmit = () => {
  console.log(newSupportTicket)
   dispatch(createTicket(newSupportTicket))
  .then(() => {
    // Entry added successfully
  console.log("Ticket dispatched");
  setTicketSubmitted(true);

  })
  .catch(error => {
    // Handle error if entry addition fails
    console.error('Error adding ticket:', error);
  }); 
  }


  return (
     <ScrollView m={6}>
      <VStack space={4}>
        {ticketSubmitted ? (
            <>
            <Text size="lg">The following ticket was submitted</Text>
            {tickets.length > 0 && (
              <>
              <Text fontWeight="extrabold">Description</Text>
                <Text>{tickets[tickets.length - 1].description}</Text>
                <Text fontWeight="extrabold">Picture</Text>
                <Image source={{ uri: tickets[tickets.length - 1].photo }} style={{ width: 400, height: 400 }} />
              </>
            )}
          </>
        ) : (
          <>
          <Text size="lg">Report a problem</Text>
      <FormControl.Label>Describe your problem</FormControl.Label>
        <Input type="text" placeholder="Your problem" autoCapitalize="none" onChangeText={(value: string) =>  setSupportTicketForm({ ...supportTicketForm, description: value })} />
      {camera ? 
 <Picture 
 setCamera={setCamera}
  setPhotoToDisplay={setPhotoToDisplay}
  photoToDto={(photo: string) => setSupportTicketForm({...supportTicketForm, photo})}
  ></Picture> : <>
        <Button onPress={() => setCamera(true)} bg="black">Add a picture</Button>
        </> }
       <Button onPress={handleSubmit}>Submit</Button>
          </>
        )}
      
       </VStack>
    </ScrollView>
  )
}

export default SupportTicketScreen