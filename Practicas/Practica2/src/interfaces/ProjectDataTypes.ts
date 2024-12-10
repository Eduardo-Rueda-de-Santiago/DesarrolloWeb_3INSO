import {GenericAddress} from "@/interfaces/GenericDataTypes";
import {Property} from "csstype";

export interface ProjectData {

    _id: string,
    clientId: string,
    address: GenericAddress | null,
    name: string,
    projectCode: string,
    code: string,
    begin: string,
    end: string,
    notes: string,

}