"use client"

import UserService from "@/services/User";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {UserLoginForm} from "@/interfaces/UserDataTypes";
import '@/app/auth/register/Style.css';

export default function Login() {

    const router = useRouter();

    const [formData, setFormData] = useState<UserLoginForm>({
        email: "",
        password: "",
    })

    const updateFormData = (field: string, data: string | boolean) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: data,
        }));
    };

    const validateForm = () => {

        const {email, password} = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
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

        return true;
    };

    const submit = (e: any) => {
        e.preventDefault(); // Prevent page refresh on form submission
        if (validateForm()) {
            new UserService().login(formData)
                .then((res) => {
                    console.log(res)
                    router.push("/dashboard/client/explore");
                })
        }
    }

    return (
        <div>

            <h2 className={'register-title'}>Create your ZoSale id</h2>

            <form className={'register-form'} onSubmit={submit}>

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
                <input
                    className={'register-submit'}
                    type={'submit'}
                />

            </form>
        </div>
    );

}