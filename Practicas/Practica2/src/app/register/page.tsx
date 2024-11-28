"use client"

import UserService from "@/services/User";
import {FormEvent} from "react";
import './Style.css';

export default function Register() {

    const submit = (event: FormEvent<HTMLFormElement>) => {

        const userData = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }

        new UserService().register(
            userData.firstName,
            userData.lastName,
            userData.email,
            userData.password,
        )
        event.preventDefault();
        console.log("submit", event);
    }

    return (
        <div>

            <h2 className={'register-title'}>Create your ZoSale id</h2>

            <form className={'register-form'} onSubmit={submit}>

                <input
                    className={'common-register-form-input register-firstname'}
                    value={'firstName'}
                    type={'text'}
                    placeholder={"First name"}
                />

                <input
                    className={'common-register-form-input register-lastname'}
                    value={'lastName'}
                    type={'text'}
                    placeholder={"Last name"}
                />

                <input
                    className={'common-register-form-input register-email'}
                    value={'email'}
                    type={'text'}
                    placeholder={"email"}
                />

                <input
                    className={'common-register-form-input register-password'}
                    value={'password'}
                    type={'password'}
                    placeholder={"password"}
                />

                <input
                    className={'register-terms-checkbox'}
                    value={'terms'}
                    type={'checkbox'}
                    name={'Terms agreement'}
                />

                <p
                    className={'register-terms-label'}
                >
                    I sell my soul to google
                </p>

                <input
                    className={'register-submit'}
                    type={'submit'}
                />

            </form>
        </div>
    );
}