/**
 * List of all delivery notes couldn't be fetched.
 */
export class DeliveryNotesNotFetchedError extends Error {
    constructor(text?: string) {
        super("Delivery notes couldn't be fetched." + text);
    }
}

/**
 * Delivery note couldn't be created
 */
export class DeliveryNoteNotCreatedError extends Error {
    constructor(text?: string) {
        super("Delivery note couldn't be created." + text);
    }
}

/**
 * Delivery note couldn't be edited
 */
export class DeliveryNoteNotEditedError extends Error {
    constructor(text?: string) {
        super("Delivery note couldn't be edited." + text);
    }
}

/**
 * Couldn't generate pdf of delivery note
 */
export class DeliveryNotPdfNotGeneratedError extends Error {
    constructor(text?: string) {
        super("Delivery note couldn't generate a pdf." + text);
    }
}

/**
 * Delivery note couldn't be deleted
 */
export class DeliveryNoteNotDeletedError extends Error {
    constructor(text?: string) {
        super("Delivery note couldn't be deleted." + text);
    }
}