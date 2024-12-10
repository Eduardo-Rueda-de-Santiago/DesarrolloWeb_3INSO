export class ClientsNotFetchedException extends Error {
    constructor() {
        super("Clients couldn't be fetched.");
    }
}