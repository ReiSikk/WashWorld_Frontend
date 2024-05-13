import { CreateCardDTO } from '../entities/CreateCardDTO';
import { SuperQueries } from './SuperQueries';
//import * as SecureStore from 'expo-secure-store';


export class PaymentCardQueries extends SuperQueries {
    static baseUrl = SuperQueries.baseUrl + 'paymentcards'

    
    static async fetchAll() {
        //const token = await SecureStore.getItemAsync('token')
        const response = await fetch(this.baseUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                /* 'Authorization': `Bearer ${token}` */
            }
        
        });
        const data = await response.json();
        console.log(data, "data in fetchAll PaymentCardQueries");
        return data;
    }
    
    static async createCard(card: CreateCardDTO) {
     /*    const token = await SecureStore.getItemAsync('token') */
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
               /*  'Authorization': `Bearer ${token}` */


            },
            body: JSON.stringify(card)
        });
        const data = await response.json();
        return data;
    }
    

/*     static async deleteEntry(id: number) {
        console.log(id, "id in deleteEntry EntryQueries");
        const token = await SecureStore.getItemAsync('token')
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                 'Authorization': `Bearer ${token}`
            },
        });
        const data = await response.json();
        console.log(data, "data in deleteEntry EntryQueries")
        return data;
    }
    */

} 