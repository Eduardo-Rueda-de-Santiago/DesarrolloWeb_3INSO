import {GenericAddress} from "@/interfaces/GenericDataTypes";

export interface ClientData {
    _id: string,
    name: string,
    cif: string,
    address: GenericAddress | null,
}
