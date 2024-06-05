import { SuperQueries } from './SuperQueries';
//import * as SecureStore from 'expo-secure-store';


export class SubscriptionQueries extends SuperQueries {
    static baseUrl = SuperQueries.baseUrl + 'subscription'

    
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
        return data;
    }
} 