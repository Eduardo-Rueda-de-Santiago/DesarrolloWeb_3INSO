export interface ClientData {
    _id: string,
    name: string,
    cif: string,
    address: ClientAddress | null,
}

export interface ClientAddress {
    street: string,
    number: number,
    postal: number,
    city: string,
    province: string
}