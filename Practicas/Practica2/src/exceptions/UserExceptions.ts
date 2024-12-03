export class UserTokenNotFoundError extends Error {
    constructor() {
        super("User token couldn't be found.");
    }
}