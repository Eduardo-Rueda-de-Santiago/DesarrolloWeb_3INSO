"use client"
import "./style.css"
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {DeliveryNoteData} from "@/interfaces/DeliveryNoteDataTypes";
import {ProjectData} from "@/interfaces/ProjectDataTypes";
import ProjectService from "@/services/Project";
import DeliveryNoteService from "@/services/DeliveryNote";

export default function CreateDeliveryNotePage() {

    const [formData, setFormData] = useState<DeliveryNoteData>({
        _id: "",
        clientId: "",
        projectId: "",
        hours: NaN,
        description: "",
        workdate: "",
        format: "hours",
    })
    const [projects, setProjects] = useState<ProjectData[]>([]);

    const loadProjects = () => {
        const projectService = new ProjectService();
        projectService.getAllProjects()
            .then((res) => {
                console.log(res);
                setProjects(res);
            })
    }

    useEffect(() => {
        loadProjects();
    }, []);

    const updateFormData = (field: string, data: string | boolean | number) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [field]: data,
            };
        });
    };

    const validateForm = () => {
        //
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
            new DeliveryNoteService().createDeliveryNote(formData)
                .then((res) => {
                    console.log(res)
                    // router.push("/dashboard/deliveryNote/explore");
                })
        }
    }

    return (
        <div className={"creacion-albaran-component"}>

            <h2 className={'creacion-albaran-titulo'}>Creación de albaran</h2>

            <form className={"creacion-albaran-formulario"} onSubmit={submit}>
                <label className={"creacion-albaran-label"}>
                    Nombre proyecto:
                    <select value={formData.clientId}
                            onChange={(e) => {
                                const project: ProjectData = projects[Number(e.target.value)];
                                updateFormData("clientId", project.clientId);
                                updateFormData("projectId", project._id);
                            }}
                    >
                        {projects.map((project, index) => (
                            <option key={project._id}
                                    value={index}>{project.name}</option>
                        ))}
                    </select>
                </label>
                <label className={"creacion-albaran-label"}>
                    Horas:
                    <input type="number" value={formData.hours}
                           onChange={(e) => updateFormData("hours", e.target.value)}/>
                </label>
                <label className={"creacion-albaran-label"}>
                    Descripción:
                    <input type="text" value={formData.description}
                           onChange={(e) => updateFormData("description", e.target.value)}/>
                </label>
                <label className={"creacion-albaran-label"}>
                    Fecha de trabajo:
                    <input type="text" value={formData.workdate}
                           onChange={(e) => updateFormData("workdate", e.target.value)}/>
                </label>
                <input
                    className={'creacion-albaran-submit'}
                    type={'submit'}
                />

            </form>


        </div>
    );
}