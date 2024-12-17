"use client"

import {ClientData} from "@/interfaces/ClientDataTypes";
import {useState} from "react";
import ClientService from "@/services/Clients";
import {useRouter} from "next/navigation";
import "./style.css"

export default function CreateClient() {

    const [formData, setFormData] = useState<ClientData>({
        _id: "",
        name: "",
        cif: "",
        address: {
            street: "",
            number: 0,
            postal: 0,
            city: "",
            province: ""
        }
    })

    const updateFormData = (field: string, data: string | boolean | number) => {
        setFormData((prevData) => {
            const fields = field.split('.');
            if (fields.length > 1) {
                return {
                    ...prevData,
                    [fields[0]]: {
                        ...prevData.address,
                        [fields[1]]: data,
                    },
                };
            } else {
                return {
                    ...prevData,
                    [field]: data,
                };
            }
        });
    };

    const validateForm = () => {

        const {name, cif, address} = formData;

        if (!name || !cif) {
            alert("Please fill out all fields.");
            return false;
        }

        if (cif && cif.length < 8) {
            alert("CIF must be at least 8 characters.");
            return false;
        }

        if (!address?.province) {
            alert("Please indicate province.");
            return false;
        }

        return true;
    };

    const router = useRouter();

    const submit = (e: any) => {
        e.preventDefault(); // Prevent page refresh on form submission
        if (validateForm()) {
            new ClientService().createClient(formData)
                .then((res) => {
                    router.push("/dashboard/client/explore");
                })
        }
    }

    return (
        <div className={"creacion-cliente-component"}>

            <h2 className={'creacion-cliente-titulo'}>Creación de cliente</h2>

            <form className={"creacion-cliente-formulario"} onSubmit={submit}>
                <label className={"creacion-cliente-label"}>
                    Nombre:
                    <input type="text" value={formData.name} onChange={(e) => updateFormData("name", e.target.value)}/>
                </label>
                <label className={"creacion-cliente-label"}>
                    CIF:
                    <input type="text" value={formData.cif} onChange={(e) => updateFormData("cif", e.target.value)}/>
                </label>
                <label className={"creacion-cliente-label"}>
                    Calle:
                    <input type="text" value={formData.address?.street}
                           onChange={(e) => updateFormData("address.street", e.target.value)}/>
                </label>
                <label className={"creacion-cliente-label"}>
                    Número:
                    <input type="number" value={formData.address?.number}
                           onChange={(e) => updateFormData("address.number", e.target.value)}/>
                </label>
                <label className={"creacion-cliente-label"}>
                    Código postal:
                    <input type="number" value={formData.address?.postal}
                           onChange={(e) => updateFormData("address.postal", e.target.value)}/>

                </label>
                <label className={"creacion-cliente-label"}>
                    Ciudad:
                    <input type="text" value={formData.address?.city}
                           onChange={(e) => updateFormData("address.city", e.target.value)}/>
                </label>
                <label className={"creacion-cliente-label"}>
                    Provincia:
                    <input type="text" value={formData.address?.province}
                           onChange={(e) => updateFormData("address.province", e.target.value)}/>

                </label>
                <input
                    className={'creacion-cliente-submit'}
                    type={'submit'}
                />

            </form>


        </div>
    );
}