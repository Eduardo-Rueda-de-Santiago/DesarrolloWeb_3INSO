import {UserLoginForm, UserRegisterForm} from '@/interfaces/UserDataTypes';
import {UserNotFoundError, UserTokenNotFoundError} from "@/exceptions/UserExceptions";

export default class UserService {

    constructor() {
    }

    /**
     * Registra al usuario
     * @param userRegisterForm Datos del usuario en el formulario.
     */
    async register(userRegisterForm: UserRegisterForm): Promise<void> {
        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/user/register?`
            + new URLSearchParams({
                email: userRegisterForm.email,
                password: userRegisterForm.password,
                name: userRegisterForm.firstName,
                surnames: userRegisterForm.lastName,
            }).toString()
            , {
                method: 'POST',
            })
            .then(res => {
                return res.json()
            })
            .then((data) => {
                this.saveToken(data.token);
            })
            .catch((err) => {
                console.error("Error registering user", err);
                throw err;
            });
    }

    /**
     * Obtiene la cookie de token de usuario desde el lado de cliente.
     */
    getClientToken(): string {

        const cookies = document.cookie.split(';');
        const userTokenCookie = cookies.find(cookie => cookie.trim().startsWith('userToken='));

        if (userTokenCookie) {
            return userTokenCookie.split('=')[1].trim();
        }

        throw new UserTokenNotFoundError();

    }

    /**
     * Guarda el token
     * @param userToken Valor del token
     */
    async saveToken(userToken: string): Promise<void> {

        try {

            document.cookie = "userToken=" + userToken;

        } catch (error) {

            console.log("Error salvando cookie de usuario: ", error);
            throw error;
        }

    }

    /**
     * Logs in the user
     * @param userLoginForm The user login data
     */
    async login(userLoginForm: UserLoginForm): Promise<void> {
        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/user/login?`
            + new URLSearchParams({
                email: userLoginForm.email,
                password: userLoginForm.password
            }).toString()
            , {
                method: 'POST',
            })
            .then(res => {
                if (!res.ok) {
                    throw new UserNotFoundError();
                }
                return res.json()
            })
            .then((data) => {
                this.saveToken(data.token);
            })
            .catch((err) => {
                console.error("Error registering user", err);
                throw err;
            })
    }

    async logout() {

    }

    async delete() {

    }
}