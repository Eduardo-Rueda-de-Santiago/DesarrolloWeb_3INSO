export interface ClientData {
    name: string,
    cif: string,
    address: ClientAddress
}

export interface ClientAddress {
    street: string,
    number: number,
    postal: number,
    city: string,
    province: string
}