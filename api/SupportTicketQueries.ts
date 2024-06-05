import { CreateSupportTicket } from '../entities/CreateSupportTicket';
import { SuperQueries } from './SuperQueries';

export class SupportTicketQueries extends SuperQueries {
    static baseUrl = SuperQueries.baseUrl + 'support-ticket'

    static async fetchAll() {
        const response = await fetch(this.baseUrl);
        const data = await response.json();
        return data;
    }

    static async createSupportTicket(supportTicket: CreateSupportTicket) {
        console.log('called support ticket queries')
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(supportTicket)
        });
        const data = await response.json();
        console.log('console before data,', data)
        return data;
    }
}