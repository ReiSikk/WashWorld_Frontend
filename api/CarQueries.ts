import { SuperQueries } from "./SuperQueries";
import * as SecureStore from 'expo-secure-store';
import { useSelector } from "react-redux";
import { RootState } from "../store/store";


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
            console.log(data, "data from fetchAll carQueries response");
            return data;
    }

}
