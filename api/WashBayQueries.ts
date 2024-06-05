import { SuperQueries } from './SuperQueries';
import * as SecureStore from 'expo-secure-store';

export class WashBayQueries extends SuperQueries {
    static baseUrl = SuperQueries.baseUrl + 'washbay'

static async updateWashBay(bayId: number, updatedAvailability: boolean) {
    const token = await SecureStore.getItemAsync('token');
    const response = await fetch(this.baseUrl+`/${bayId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({available: updatedAvailability}),
    });
    const data = await response.json();
    return data;
}
}