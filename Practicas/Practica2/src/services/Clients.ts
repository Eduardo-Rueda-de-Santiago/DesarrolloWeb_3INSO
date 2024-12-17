import {ClientData} from "@/interfaces/ClientDataTypes";
import UserService from "@/services/User";
import {ClientsNotFetchedError} from "@/exceptions/ClientExceptions";

/**
 * Clase para interactuar con los clientes en la API
 */
export default class ClientService {

    constructor() {
    }

    /**
     * Obtiene una lista con todos los clientes en la plataforma (a los que el usuario tiene acceso).
     */
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
                if (!res.ok) {
                    throw new ClientsNotFetchedError();
                }
                return res.json()
            })

    }

    /**
     * Crea un cliente
     * @param clientData Datos del cliente a crear
     */
    async createClient(clientData: ClientData): Promise<ClientData> {

        const {_id, ...clientDataWithoutId} = clientData;


        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            },
            body: JSON.stringify(clientDataWithoutId)
        }

        console.log(options, options)

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/client`,
            options
        ).then(res => res.json());
    }

    /**
     * Actualiza un cliente
     * @param clientData Datos del cliente a actualizar
     */
    async updateClient(clientData: ClientData): Promise<ClientData> {

        const {_id, ...clientDataWithoutId} = clientData;

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            },
            body: JSON.stringify(clientDataWithoutId)
        }

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/client/${_id}`,
            options
        ).then(res => res.json());
    }

    /**
     * Borra un cliente
     * @param clientData Datos del cliente a borrar
     */
    async deleteClient(clientData: ClientData): Promise<ClientData> {

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            }
        }

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/client/${clientData._id}`,
            options
        ).then(res => res.json());
    }


}