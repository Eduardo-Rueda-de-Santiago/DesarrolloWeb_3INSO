import {ClientData} from "@/interfaces/ClientDataTypes";
import UserService from "@/services/User";
import {ClientsNotFetchedError} from "@/exceptions/ClientExceptions";

/**
 * Clase para interactuar con los clientes en la API
 */
export default class ClientService {
    constructor() {
    }


    async getClients(): Promise<ClientData[]> {

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            }
        }

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/client`,
            options
        )
            .then(res => {
                console.log(res)
                if (!res.ok) {
                    throw new ClientsNotFetchedError();
                }
                return res.json()
            })

    }

}