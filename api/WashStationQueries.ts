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

    static async fetchStationsWithBays(washStationId: number) {
        const response = await fetch(this.baseUrl+`/${washStationId}/washbays`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        
        });
        const data = await response.json();
        return data;
    }

    static async isStationOpen(locationID: number) {
        const response = await fetch(this.baseUrl+`/${locationID}/isOpen`);
        const data = await response.json();
        return data.isOpen;
      };

  

    

} 