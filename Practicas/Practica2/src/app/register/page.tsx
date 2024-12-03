"use client"

import UserService from "@/services/User";
import {useState} from "react";
import './Style.css';
import {UserRegisterForm} from '@/interfaces/UserDataTypes';
import {useRouter} from 'next/navigation';

export default function Register() {

    const router = useRouter();

    const [formData, setFormData] = useState<UserRegisterForm>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        check: false
    })

    const updateFormData = (field: string, data: string | boolean) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: data,
        }));
    };

    const validateForm = () => {

        const {firstName, lastName, email, password, check} = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!firstName || !lastName || !email || !password) {
            alert("Please fill out all fields.");
            return false;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters.");
            return false;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (!check) {
            alert("You must agree to the terms.");
            return false;
        }

        return true;
    };

    const submit = (e: any) => {
        e.preventDefault(); // Prevent page refresh on form submission
        if (validateForm()) {
            new UserService().register(formData)
                .then(() => {
                    router.push("/dashboard");
                })
        }
    }

    return (
        <div>

            <h2 className={'register-title'}>Create your ZoSale id</h2>

            <form className={'register-form'} onSubmit={submit}>

                <input
                    className={'common-register-form-input register-firstname'}
                    value={formData.firstName}
                    type={'text'}
                    placeholder={"First name"}
                    onChange={(e) => updateFormData("firstName", e.target.value)}

                />

                <input
                    className="common-register-form-input register-lastname"
                    value={formData.lastName}
                    type="text"
                    placeholder="Last name"
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                />

                <input
                    className="common-register-form-input register-email"
                    value={formData.email}
                    type="text"
                    placeholder="Email"
                    onChange={(e) => updateFormData("email", e.target.value)}
                />

                <input
                    className="common-register-form-input register-password"
                    value={formData.password}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => updateFormData("password", e.target.value)}
                />

                <div className="register-terms">
                    <input
                        className="register-terms-checkbox"
                        checked={formData.check}
                        type="checkbox"
                        onChange={(e) => updateFormData("check", e.target.checked)}
                    />
                    <p className="register-terms-label">
                        I sell my soul to google
                    </p>
                </div>
                <input
                    className={'register-submit'}
                    type={'submit'}
                />

            </form>
        </div>
    );
}