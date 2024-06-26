import { SuperQueries } from "./SuperQueries";
import { createMemberDTO } from "../entities/CreateMemberDTO";
import * as SecureStore from 'expo-secure-store';
import { setMemberID } from '../store/MemberSlice';
import { CreateCarDto } from "../entities/CreateCarDTO";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export class MemberQueries extends SuperQueries {
    static baseUrl = SuperQueries.baseUrl + 'auth/'
    static memberUrl = SuperQueries.baseUrl + 'member/'

    static async login( email: string, password: string) {

       const response = await fetch(this.baseUrl + "login", { 
          method: 'POST',
           headers: {
               'Content-Type': 'application/json'
            },
           body: JSON.stringify({ email, password})
       });
        const data = await response.json();
        //store token in secure store
        SecureStore.setItemAsync('token', data.token);
        
        return data;
    } 
 static async signup(member: createMemberDTO) {
         const response = await fetch(this.baseUrl + "signup", { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(member)
         });
         const data = await response.json();

         return data;  
   }

   static async getMember() {
    const token = await SecureStore.getItemAsync('token')
         const response = await fetch(this.baseUrl + "profile", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
            const data = await response.json();
            return data;
    }
   static async getTokenValidity() {
    const token = await SecureStore.getItemAsync('token')
    try {
         const response = await fetch(this.baseUrl + "check-token", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
            const data = await response.json();
            return data;
        } catch (error) {
        }
    }

   static async getMemberDetails(memberID: number) {
    const token = await SecureStore.getItemAsync('token')
         const response = await fetch(this.memberUrl + `${memberID}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
            const data = await response.json();
            return data;
    }
 
    static async confirmSubscription(formData: {memberID: string, createCarDtos: CreateCarDto[], paymentMethodID: string}) {

        try {
            const response = await fetch(this.memberUrl+`${formData.memberID}/add-car`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
        
            if (!response.ok) {
              throw new Error('Failed to add cars to subscription, please try again');
            }
            const data = await response.json();
            return data
          } catch (error) {
            console.log(error);
          }
    }
}