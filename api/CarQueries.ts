import { SuperQueries } from "./SuperQueries";
import * as SecureStore from 'expo-secure-store';


export class CarQueries extends SuperQueries {
    static carUrl = SuperQueries.baseUrl + 'car/'

static async fetchAll() {
    const token = await SecureStore.getItemAsync('token')
         const response = await fetch(this.carUrl + "member", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            const data = await response.json();
            return data;
    }

}
