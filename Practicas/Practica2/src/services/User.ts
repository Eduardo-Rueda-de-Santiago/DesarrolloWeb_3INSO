import {cookies} from 'next/headers'
import {ReadonlyRequestCookies, ResponseCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies";
import {RequestCookies} from "next/dist/compiled/@edge-runtime/cookies";

export default class UserService {

    constructor() {
    }

    async register(firstName: string, lastName: string, email: string, password: string) {

        fetch();
    }

    async get() {

    }

    /**
     * Guarda el token
     * @param tokenValue Valor del token
     */
    async saveToken(tokenValue: string): Promise<void> {

        try {

            cookies()
                .then(async (cookies: ReadonlyRequestCookies) => {
                    return cookies.set('userToken', tokenValue);
                });

        } catch (error) {

            console.log("Error salvando cookie de usuario: ", error);

        }

    }

    /**
     * Recupera el token
     */
    getToken(cookies: RequestCookies): string | undefined {

        try {

            return cookies.get('userToken')?.value;

        } catch (error) {

            console.log("Error salvando cookie de usuario: ", error);

        }
    }

    async login() {

    }

    async logout() {

    }

    async delete() {

    }
}