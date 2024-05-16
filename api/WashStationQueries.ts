import { CreateCardDTO } from '../entities/CreateCardDTO';
import { SuperQueries } from './SuperQueries';


export class WashStationQueries extends SuperQueries {
    static baseUrl = SuperQueries.baseUrl + 'washstation'

    
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