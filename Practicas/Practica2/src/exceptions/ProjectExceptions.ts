/**
 * List of all projects couldn't be fetched.
 */
export class ProjectsNotFetchedError extends Error {
    constructor(text?: string) {
        super("Projects couldn't be fetched." + text);
    }
}

/**
 * Project couldn't be created
 */
export class ProjectNotCreatedError extends Error {
    constructor(text?: string) {
        super("Project couldn't be created." + text);
    }
}

/**
 * Project couldn't be edited
 */
export class ProjectNotEditedError extends Error {
    constructor(text?: string) {
        super("Project couldn't be edited." + text);
    }
}


/**
 * Project couldn't be deleted
 */
export class ProjectNotDeletedError extends Error {
    constructor(text?: string) {
        super("Project couldn't be deleted." + text);
    }
}