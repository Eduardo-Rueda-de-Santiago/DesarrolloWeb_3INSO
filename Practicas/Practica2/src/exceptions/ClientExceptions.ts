/**
 * List of all clients couldn't be fetched.
 */
export class ClientsNotFetchedError extends Error {
    constructor(text?: string) {
        super("Clients couldn't be fetched." + text);
    }
}

/**
 * Client couldn't be created
 */
export class ClientNotCreatedError extends Error {
    constructor(text?: string) {
        super("Clients couldn't be created." + text);
    }
}

/**
 * Client couldn't be edited
 */
export class ClientNotEditedError extends Error {
    constructor(text?: string) {
        super("Clients couldn't be edited." + text);
    }
}


/**
 * Client couldn't be deleted
 */
export class ClientNotDeletedError extends Error {
    constructor(text?: string) {
        super("Clients couldn't be deleted." + text);
    }
}