/**
 * El usuario no ha sido encontrado
 */
export class UserNotFoundError extends Error {
    constructor(text?: string) {
        super("User doesn't exist." + text);
    }
}

/**
 * No se ha podido encontrar el token del usuario
 */
export class UserTokenNotFoundError extends Error {
    constructor(text?: string) {
        super("User token couldn't be found." + text);
    }
}

/**
 * No se ha podido validar el usuario
 */
export class UserNotValidatedError extends Error {
    constructor(text?: string) {
        super("User couldn't be validated exist." + text);
    }
}

/**
 * No se ha podido hacer log in
 */
export class UserLoginError extends Error {
    constructor(text?: string) {
        super("User couldn't make login." + text);
    }
}


/**
 * No se ha podido hacer log out
 */
export class UserLogoutError extends Error {
    constructor(text?: string) {
        super("User couldn't make logout." + text);
    }
}


/**
 * No se ha podido eliminar al usuario
 */
export class UserDeletionError extends Error {
    constructor(text?: string) {
        super("User couldn't be deleted." + text);
    }
}