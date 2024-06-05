import { SuperQueries } from './SuperQueries';


export class SubscriptionQueries extends SuperQueries {
    static baseUrl = SuperQueries.baseUrl + 'subscription'

    
    static async fetchAll() {
        const response = await fetch(this.baseUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        
        });
        const data = await response.json();
        return data;
    }
} 