export class UserTokenNotFoundError extends Error {
    constructor() {
        super("User token couldn't be found.");
    }
}

export class UserNotFoundError extends Error {
    constructor() {
        super("User doesn't exist.");
    }
}