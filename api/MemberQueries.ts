import { SuperQueries } from "./SuperQueries";
import { createMemberDTO } from "../entities/CreateMemberDTO";

export class MemberQueries extends SuperQueries {
    static baseUrl = SuperQueries.baseUrl + 'auth/'

    static async login( email: string, password: string) {
console.log("calling...", this.baseUrl + "login");
console.log(email, password, "email and password")

       const response = await fetch(this.baseUrl + "login", { 
          method: 'POST',
           headers: {
               'Content-Type': 'application/json'
            },
           body: JSON.stringify({ email, password})
       });
        const data = await response.json();
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
         console.log(data, "data from signup response");

         return data;  
         }
         
    static async logout() {
        console.log("Not implemented yet");
    } 
}