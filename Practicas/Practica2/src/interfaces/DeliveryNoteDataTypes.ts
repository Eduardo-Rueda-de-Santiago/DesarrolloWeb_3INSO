export interface DeliveryNote {

    clientId: string,
    projectId: string,
    // "format": "material or hours",
    // "material": "type of material",
    hours: number,
    description: string,
    workdate: string
}

