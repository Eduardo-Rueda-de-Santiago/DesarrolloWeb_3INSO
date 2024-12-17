"use client"
import {useEffect, useState} from "react";
import {ClientData} from "@/interfaces/ClientDataTypes";
import {useRouter} from "next/navigation";
import ClientService from "@/services/Clients";
import {ProjectData} from "@/interfaces/ProjectDataTypes";
import "./style.css";
import ProjectService from "@/services/Project";

export default function CreateProjectPage() {

    const [formData, setFormData] = useState<ProjectData>({
        _id: "",
        clientId: "",
        address: {
            street: "",
            number: 0,
            postal: 0,
            city: "",
            province: ""
        },
        name: "",
        projectCode: "",
        code: "",
        begin: "",
        end: "",
        notes: ""
    })
    const [clients, setClients] = useState<ClientData[]>([]);

    const loadClients = () => {
        const clientService = new ClientService();
        clientService.getClients()
            .then((res) => {
                setClients(res);
            })
    }

    useEffect(() => {
        loadClients();
    }, []);


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

        // const {name, cif, address} = formData;
        //
        // if (!name || !cif) {
        //     alert("Please fill out all fields.");
        //     return false;
        // }
        //
        // if (cif && cif.length < 8) {
        //     alert("CIF must be at least 8 characters.");
        //     return false;
        // }
        //
        // if (!address?.province) {
        //     alert("Please indicate province.");
        //     return false;
        // }

        return true;
    };

    const router = useRouter();

    const submit = (e: any) => {
        e.preventDefault(); // Prevent page refresh on form submission
        if (validateForm()) {
            console.log(formData);
            new ProjectService().createProject(formData)
                .then((res) => {
                    router.push("/dashboard/project/explore");
                })
        }
    }

    return (
        <div className={"creacion-project-component"}>

            <h2 className={'creacion-project-titulo'}>Creación de proyecto</h2>

            <form className={"creacion-project-formulario"} onSubmit={submit}>
                <label className={"creacion-project-label"}>
                    Client Id:
                    <select value={formData.clientId} onChange={(e) => updateFormData("clientId", e.target.value)}>
                        {clients.map((client) => (
                            <option key={client._id} value={client._id}>{client.name}</option>
                        ))}
                    </select>
                </label>
                <label className={"creacion-project-label"}>
                    Calle:
                    <input type="text" value={formData.address?.street}
                           onChange={(e) => updateFormData("address.street", e.target.value)}/>
                </label>
                <label className={"creacion-project-label"}>
                    Número:
                    <input type="number" value={formData.address?.number}
                           onChange={(e) => updateFormData("address.number", e.target.value)}/>
                </label>
                <label className={"creacion-project-label"}>
                    Código postal:
                    <input type="number" value={formData.address?.postal}
                           onChange={(e) => updateFormData("address.postal", e.target.value)}/>

                </label>
                <label className={"creacion-project-label"}>
                    Ciudad:
                    <input type="text" value={formData.address?.city}
                           onChange={(e) => updateFormData("address.city", e.target.value)}/>
                </label>
                <label className={"creacion-project-label"}>
                    Provincia:
                    <input type="text" value={formData.address?.province}
                           onChange={(e) => updateFormData("address.province", e.target.value)}/>

                </label>
                <label className={"creacion-project-label"}>
                    Name:
                    <input type="text" value={formData.name} onChange={(e) => updateFormData("name", e.target.value)}/>
                </label>
                <label className={"creacion-project-label"}>
                    Project code:
                    <input type="text" value={formData.projectCode}
                           onChange={(e) => updateFormData("projectCode", e.target.value)}/>
                </label>
                <label className={"creacion-project-label"}>
                    Code:
                    <input type="text" value={formData.code}
                           onChange={(e) => updateFormData("code", e.target.value)}/>
                </label>
                <label className={"creacion-project-label"}>
                    Begin:
                    <input type="text" value={formData.begin}
                           onChange={(e) => updateFormData("begin", e.target.value)}/>
                </label>
                <label className={"creacion-project-label"}>
                    End:
                    <input type="text" value={formData.end}
                           onChange={(e) => updateFormData("end", e.target.value)}/>
                </label>
                <label className={"creacion-project-label"}>
                    Notes:
                    <input type="text" value={formData.notes}
                           onChange={(e) => updateFormData("notes", e.target.value)}/>
                </label>
                <input
                    className={'creacion-project-submit'}
                    type={'submit'}
                />

            </form>


        </div>
    );
}