"use client"
import {DeliveryNoteData} from "@/interfaces/DeliveryNoteDataTypes";
import DeliveryNoteService from "@/services/DeliveryNote";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import "./style.css"
import {ClientData} from "@/interfaces/ClientDataTypes";
import ClientService from "@/services/Clients";
import ProjectService from "@/services/Project";
import {ProjectData} from "@/interfaces/ProjectDataTypes";

function DeliveryNotesListItems(props: {
    deliveryNote: DeliveryNoteData,
    setSelectedDeliveryNote: (deliveryNote: DeliveryNoteData) => void
}) {

    const deliveryNote: DeliveryNoteData = props.deliveryNote;
    const updateSelectedClient = () => {
        props.setSelectedDeliveryNote(deliveryNote);
    };
    const deliveryNoteService = new DeliveryNoteService();
    const downloadDeliveryNote = () => {

        deliveryNoteService.downloadDeliveryNotePdf(deliveryNote._id).then(res => {
            res.blob().then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'albaran.pdf';
                a.click();
            });
        })
    }

    return (
        <div onClick={updateSelectedClient} key={deliveryNote._id} className={"explore-deliveryNote-list-element"}>
            <h3>{deliveryNote.description}</h3>
            <button onClick={downloadDeliveryNote}>Download</button>
        </div>
    );

}

export default function ExploreDeliveryNotePage() {

    const deliveryNoteService = new DeliveryNoteService()

    const [deliveryNotes, setDeliveryNotes] = useState<DeliveryNoteData[]>([]);
    const [noDeliveryNotes, setNoDeliveryNotes] = useState<Boolean>(true);
    const [selectedDeliveryNote, setSelectedDeliveryNote] = useState<DeliveryNoteData | null>(null);
    const [deliveryNoteEditable, setDeliveryNoteEditable] = useState<Boolean>(false);
    const [projects, setProjects] = useState<ProjectData[]>([]);

    const loadCProjects = () => {
        const projectService = new ProjectService();
        projectService.getAllProjects()
            .then((res) => {
                setProjects(res);
            })
    }

    useEffect(() => {
        loadCProjects();
    }, []);

    const loadDeliveryNotes = () => {
        deliveryNoteService.getAllDeliveryNotes()
            .then((res) => {
                if (res.length > 0) setNoDeliveryNotes(false);
                setDeliveryNotes(res);
            })
    }

    const updateDeliveryNote = () => {
        if (selectedDeliveryNote) {
            deliveryNoteService.updateDeliveryNote(selectedDeliveryNote)
                .then(() => {
                    loadDeliveryNotes();
                    setDeliveryNoteEditable(false);
                })
        }
    }
    const deleteDeliveryNote = () => {
        if (selectedDeliveryNote) {
            deliveryNoteService.deleteDeliveryNote(selectedDeliveryNote)
                .then(() => {
                    changeSelectedDeliveryNote(null);
                    loadDeliveryNotes();
                });
        }
    };

    const changeSelectedDeliveryNote = (deliveryNote: DeliveryNoteData | null) => {
        setDeliveryNoteEditable(false);
        setSelectedDeliveryNote(deliveryNote);
    }

    useEffect(() => {
        loadDeliveryNotes();
    }, []);

    const router = useRouter();

    const deliveryNoteCreationRedirect = () => {
        router.push("/dashboard/deliveryNote/create");
    }

    return (
        <div className={"explore-deliveryNote-component"}>

            <h2 className={'explore-deliveryNote-titulo'}>Ver albaranes</h2>


            <div className={"explore-deliveryNote-list"}>
                {deliveryNotes.map((deliveryNote) => <DeliveryNotesListItems deliveryNote={deliveryNote}
                                                                             setSelectedDeliveryNote={changeSelectedDeliveryNote}/>)}

            </div>
            {
                noDeliveryNotes ?
                    <button className={"explore-deliveryNote-create-button"} onClick={deliveryNoteCreationRedirect}>Crea
                        tu
                        primer
                        albarán!</button>
                    :
                    <button className={"explore-deliveryNote-create-button"} onClick={deliveryNoteCreationRedirect}>Crea
                        otro
                        albarán!</button>

            }
            {
                selectedDeliveryNote &&
                deliveryNoteEditable ?
                    <div className={"explore-client-card"}>
                        <label>Proyecto<select value={selectedDeliveryNote?.clientId}
                                               onChange={(e) => setSelectedDeliveryNote({
                                                   ...selectedDeliveryNote,
                                                   clientId: e.target.value
                                               })}>
                            {projects.map((project) => (
                                <option key={project._id} value={project._id}>{project.name}</option>
                            ))}
                        </select></label>
                        <label>Horas<input
                            type="text"
                            value={selectedDeliveryNote?.hours}
                            className="explore-client-card-title"
                            onChange={(e) => setSelectedDeliveryNote({...selectedDeliveryNote, hours: e.target.value})}
                        /></label>
                        <label>Descripción<input
                            type="text"
                            value={selectedDeliveryNote?.description}
                            className="explore-client-card-cif"
                            onChange={(e) => setSelectedDeliveryNote({
                                ...selectedDeliveryNote,
                                description: e.target.value
                            })}
                        /></label>
                        <label>Fecha de trabajo<input
                            type="text"
                            value={selectedDeliveryNote?.workdate}
                            className="explore-client-card-cif"
                            onChange={(e) => setSelectedDeliveryNote({
                                ...selectedDeliveryNote,
                                workdate: e.target.value
                            })}
                        /></label>
                        <button onClick={updateDeliveryNote}>Salvar</button>
                        <button onClick={deleteDeliveryNote}>Borrar</button>
                    </div>
                    :
                    <div className={"explore-client-card"}>
                        <label>Nombre<input
                            type="text"
                            value={selectedClient?.name}
                            className="explore-client-card-title"
                            readOnly
                        /></label>
                        <label>CIF<input
                            type="text"
                            value={selectedClient?.cif}
                            className="explore-client-card-cif"
                            readOnly
                        /></label>
                        <label>Calle<input
                            type="text"
                            value={selectedClient?.address?.street}
                            className="explore-client-card-street"
                            readOnly
                        /></label>
                        <label>Número<input
                            type="text"
                            value={selectedClient?.address?.number}
                            className="explore-client-card-street-number"
                            readOnly
                        /></label>
                        <label>Código postal<input
                            type="text"
                            value={selectedClient?.address?.postal}
                            className="explore-client-card-postal"
                            readOnly
                        /></label>
                        <label>Ciudad<input
                            type="text"
                            value={selectedClient?.address?.city}
                            className="explore-client-card-city"
                            readOnly
                        /></label>
                        <label>Provincia<input
                            type="text"
                            value={selectedClient?.address?.province}
                            className="explore-client-card-province"
                            readOnly
                        /></label>
                        <button onClick={() => setClientEditable(true)}>Editar</button>
                        <button onClick={deleteClient}>Borrar</button>
                    </div>
            }

        </div>
    );
}