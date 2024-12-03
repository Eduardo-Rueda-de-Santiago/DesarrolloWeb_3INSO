import {UserRegisterForm} from '@/interfaces/UserDataTypes';
import {UserTokenNotFoundError} from "@/exceptions/UserExceptions";

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
            })
    }

    /**
     * Obtiene la cookie de token de usuario.
     */
    getToken(): string {

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

    async login() {

    }

    async logout() {

    }

    async delete() {

    }
}