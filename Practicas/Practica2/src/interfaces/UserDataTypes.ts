export interface UserRegisterForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    check: boolean
}

export interface UserLoginForm {
    email: string;
    password: string;
}
