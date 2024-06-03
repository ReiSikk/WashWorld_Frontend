import { CreateCardDTO } from '../entities/CreateCardDTO';
import { SuperQueries } from './SuperQueries';
import * as SecureStore from 'expo-secure-store';


export class MemberPaymentCardQueries extends SuperQueries {
    static baseUrl = SuperQueries.baseUrl + 'member-payment-cards'

    
    static async fetchAll() {
        const token = await SecureStore.getItemAsync('token')
        const response = await fetch(this.baseUrl+"/cards", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`
            }
        
        });
        const data = await response.json();
        //console.log(data, "data in fetchAll MemberPaymentCardQueries")
        return data;
    }

   
static async updateMemberPaymentCard(cardId: number, updatedStatus: boolean) {
    const token = await SecureStore.getItemAsync('token');
    const response = await fetch(this.baseUrl+`/${cardId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({isDefaultMethod: updatedStatus}),
    });
    const data = await response.json();
    console.log(data, "data in updateMemberPaymentCard in MemberPaymentCardQueries")
    return data;
}
    

} 