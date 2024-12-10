"use client"
import UserService from "@/services/User";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {UserValidationForm} from "@/interfaces/UserDataTypes";


export default function UserValidation() {

    const router = useRouter();

    const [formData, setFormData] = useState<UserValidationForm>({
        validationString: ""
    })

    const updateFormData = (field: string, data: string | boolean) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: data,
        }));
    };

    const validateForm = () => {

        const {validationString} = formData;

        if (validationString.length < 6) {
            alert("Validation code must have at least 6 characters");
            return false;
        }

        return true;

    }

    const submit = (e: any) => {

        e.preventDefault(); // Prevent page refresh on form submission
        if (validateForm()) {
            new UserService().validateUser(formData)
                .then((res) => {
                    router.push("/dashboard");
                })
                .catch((err: Error) => {
                    console.log(err);
                })
        }
    }

    return (
        <div>

            <h2 className={''}>Validate your user</h2>

            <form className={''} onSubmit={submit}>

                <input
                    className={''}
                    value={formData.validationString}
                    type={'text'}
                    placeholder={"Validation number"}
                    onChange={(e) => updateFormData("validationString", e.target.value)}

                />
                <input
                    className={''}
                    type={'submit'}
                />

            </form>

        </div>
    );
}