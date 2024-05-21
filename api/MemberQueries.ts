import { SuperQueries } from "./SuperQueries";
import { createMemberDTO } from "../entities/CreateMemberDTO";
import * as SecureStore from 'expo-secure-store';

export class MemberQueries extends SuperQueries {
    static baseUrl = SuperQueries.baseUrl + 'auth/'

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
       console.log(data, "data from login response");
        
        return data;
    } 
 static async signup(member: createMemberDTO) {
    console.log('calling signup)')
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
         
    static async logout() {
        console.log("Not implemented yet");
    } 
}