"use client"

import UserService from "@/services/User";
import {FormEvent} from "react";
// import './Style';

export default function Login() {

    const submit = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        console.log("submit", event);
    }
    return (
        <div>
            <form className={'register-form'} onSubmit={submit}>
                
                {/*<input type={'text'} placeholder={"First name"}/>*/}
                {/*<input type={'text'} placeholder={"Last name"}/>*/}
                {/*<input type={'text'} placeholder={"email"}/>*/}
                {/*<input type={'password'} placeholder={"password"}/>*/}
                {/*<input type={'checkbox'} name={'Terms agreement'}/>*/}
                {/*<label htmlFor={'Terms agreement'}>I sell my soul to the devil and my data to our overlord*/}
                {/*    google</label>*/}
                {/*<input type={'submit'} className={'email-input'}/>*/}

            </form>
        </div>
    );
}