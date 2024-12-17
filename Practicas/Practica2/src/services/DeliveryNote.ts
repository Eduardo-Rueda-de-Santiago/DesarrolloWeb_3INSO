import UserService from "@/services/User";
import {DeliveryNoteData} from "@/interfaces/DeliveryNoteDataTypes";
import {DeliveryNotesNotFetchedError} from "@/exceptions/DeliveryNoteExceptions";

/**
 * Clase para interactuar con los albaranes en la API
 */
export default class DeliveryNoteService {

    constructor() {
    }

    /**
     * Obtiene una lista con todos los albaranes del proyecto.
     */
    async getProjectDeliveryNotes(projectId: string): Promise<DeliveryNoteData[]> {

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            }
        }

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/deliverynote/project?`
            + new URLSearchParams({
                projectId: projectId
            }).toString(),
            options
        )
            .then(res => {
                if (!res.ok) {
                    throw new DeliveryNotesNotFetchedError();
                }
                return res.json()
            })
    }

    /**
     * Obtiene todos los albaranes
     */
    async getAllDeliveryNotes(): Promise<DeliveryNoteData[]> {

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            }
        }

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/deliverynote`,
            options
        )
            .then(res => {
                if (!res.ok) {
                    throw new DeliveryNotesNotFetchedError();
                }
                return res.json()
            });

    }

    async getDeliveryNoteById(deliveryNoteId: string): Promise<DeliveryNoteData> {

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            }
        }

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/deliverynote/${deliveryNoteId}`,
            options
        ).then(res => {
            if (!res.ok) {
                throw new DeliveryNotesNotFetchedError();
            }
            return res.json()
        });
    }

    async downloadDeliveryNotePdf(deliveryNoteId: string): Promise<Response> {

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            }
        }

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/deliverynote/pdf/${deliveryNoteId}`,
            options
        );
    }


    /**
     * Crea un albarán
     * @param deliveryNoteData Datos del albarán a crear
     */
    async createDeliveryNote(deliveryNoteData: DeliveryNoteData): Promise<DeliveryNoteData> {

        const {_id, ...projectDataWithoutId} = deliveryNoteData;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            },
            body: JSON.stringify(projectDataWithoutId)
        }

        console.log(options, options)

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/deliverynote`,
            options
        ).then(res => res.json());
    }

    /**
     * Actualiza un albarán
     * @param deliveryNoteData Datos del albarán a actualizar
     */
    async updateDeliveryNote(deliveryNoteData: DeliveryNoteData): Promise<DeliveryNoteData> {

        const {_id, ...projectDataWithoutId} = deliveryNoteData;

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            },
            body: JSON.stringify(projectDataWithoutId)
        }

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/deliverynote/${_id}?`,
            options
        ).then(res => res.json());
    }

    /**
     * Borra un albarán
     * @param deliveryNoteData Datos del albarán a borrar
     */
    async deleteDeliveryNote(deliveryNoteData: DeliveryNoteData): Promise<DeliveryNoteData> {

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            }
        }

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/deliverynote/${deliveryNoteData._id}`,
            options
        ).then(res => res.json());
    }


}