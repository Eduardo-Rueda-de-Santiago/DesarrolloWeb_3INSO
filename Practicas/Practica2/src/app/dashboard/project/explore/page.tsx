"use client"
import {ClientData} from "@/interfaces/ClientDataTypes";
import ClientService from "@/services/Clients";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import ProjectService from "@/services/Project";
import {ProjectData} from "@/interfaces/ProjectDataTypes";
import "./style.css"

function ProjectListItems(props: { project: ProjectData, setSelectedProject: (project: ProjectData) => void }) {

    const project: ProjectData = props.project;
    const updateSelectedClient = () => {
        props.setSelectedProject(project);
    };

    return (
        <div onClick={updateSelectedClient} key={project._id} className={"explore-project-list-element"}>
            <h3>{project.name}</h3>
            <p>{project.projectCode}</p>
        </div>
    );

}

export default function ExploreProjectPage() {

    const projectService = new ProjectService()

    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [noProjects, setNoProjects] = useState<Boolean>(true);
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [projectEditable, setProjectEditable] = useState<Boolean>(false);
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

    const loadProjects = () => {
        projectService.getAllProjects()
            .then((res) => {
                if (res.length > 0) setNoProjects(false);
                setProjects(res);
            })
    }

    const updateProject = () => {
        if (selectedProject) {
            projectService.updateProject(selectedProject)
                .then(() => {
                    loadProjects();
                    setProjectEditable(false);
                })
        }
    }

    const deleteProject = () => {
        if (selectedProject) {
            projectService.deleteProject(selectedProject)
                .then(() => {
                    changeSelectedProject(null);
                    loadProjects();
                });
        }
    };

    const changeSelectedProject = (project: ProjectData | null) => {
        setProjectEditable(false);
        setSelectedProject(project);
    }

    useEffect(() => {
        loadProjects();
    }, []);

    const router = useRouter();

    const projectCreationRedirect = () => {
        router.push("/dashboard/project/create");
    }

    return (

        <div className={"explore-project-component"}>

            <h2 className={'explore-project-titulo'}>Ver proyectos</h2>


            <div className={"explore-project-list"}>
                {projects.map((project) => <ProjectListItems project={project}
                                                             setSelectedProject={changeSelectedProject}/>)}

            </div>
            {
                noProjects ?
                    <button className={"explore-project-create-button"} onClick={projectCreationRedirect}>Crea tu primer
                        proyecto!</button>
                    : <button className={"explore-project-create-button"} onClick={projectCreationRedirect}>Crea otro
                        proyecto!</button>

            }
            {
                selectedProject &&
                projectEditable ?
                    <div className={"explore-project-card"}>
                        <label>Cliente<select value={selectedProject?.clientId}
                                              onChange={(e) => setSelectedProject({
                                                  ...selectedProject,
                                                  clientId: e.target.value
                                              })}>
                            {clients.map((client) => (
                                <option key={client._id} value={client._id}>{client.name}</option>
                            ))}
                        </select></label>
                        <label>Nombre<input
                            type="text"
                            value={selectedProject?.name}
                            className="explore-project-card-title"
                            onChange={(e) => setSelectedProject({...selectedProject, name: e.target.value})}
                        /></label>
                        <label>Código de proyecto<input
                            type="text"
                            value={selectedProject?.projectCode}
                            className="explore-project-card-projectCode"
                            onChange={(e) => setSelectedProject({...selectedProject, projectCode: e.target.value})}
                        /></label>
                        <label>Calle <input
                            type="text"
                            value={selectedProject?.address?.street}
                            className="explore-project-card-street"
                            onChange={(e) => setSelectedProject({
                                ...selectedProject,
                                address: {...selectedProject.address, street: e.target.value}
                            })}
                        /></label>
                        <label>Número<input
                            type="number"
                            value={selectedProject?.address?.number}
                            className="explore-project-card-street-number"
                            onChange={(e) => setSelectedProject({
                                ...selectedProject,
                                address: {...selectedProject.address, number: e.target.value}
                            })}
                        /></label>
                        <label>Código postal<input
                            type="number"
                            value={selectedProject?.address?.postal}
                            className="explore-project-card-postal"
                            onChange={(e) => setSelectedProject({
                                ...selectedProject,
                                address: {...selectedProject.address, postal: e.target.value}
                            })}
                        /></label>
                        <label>Ciudad<input
                            type="text"
                            value={selectedProject?.address?.city}
                            className="explore-project-card-city"
                            onChange={(e) => setSelectedProject({
                                ...selectedProject,
                                address: {...selectedProject.address, city: e.target.value}
                            })}
                        /></label>
                        <label>Provincia<input
                            type="text"
                            value={selectedProject?.address?.province}
                            className="explore-project-card-province"
                            onChange={(e) => setSelectedProject({
                                ...selectedProject,
                                address: {...selectedProject.address, province: e.target.value}
                            })}
                        /></label>
                        <label>Código<input
                            type="text"
                            value={selectedProject?.code}
                            className="explore-project-card-code"
                            onChange={(e) => setSelectedProject({...selectedProject, code: e.target.value})}
                        /></label>
                        <label>Comienzo<input
                            type="text"
                            value={selectedProject?.begin}
                            className="explore-project-card-begin"
                            onChange={(e) => setSelectedProject({...selectedProject, begin: e.target.value})}
                        /></label>
                        <label>Fin<input
                            type="text"
                            value={selectedProject?.end}
                            className="explore-project-card-end"
                            onChange={(e) => setSelectedProject({...selectedProject, end: e.target.value})}
                        /></label>
                        <label>Notas<input
                            type="text"
                            value={selectedProject?.notes}
                            className="explore-project-card-notes"
                            onChange={(e) => setSelectedProject({...selectedProject, notes: e.target.value})}
                        /></label>
                        <button onClick={updateProject}>Salvar</button>
                        <button onClick={deleteProject}>Borrar</button>
                    </div>
                    :
                    <div className={"explore-project-card"}>
                        <label>Nombre del
                            cliente <label>{clients.filter((client) => client._id === selectedProject?.clientId)[0]?.name}</label>
                        </label>
                        <label>Nombre<input
                            type="text"
                            value={selectedProject?.name}
                            className="explore-project-card-title"
                            readOnly/>
                        </label>
                        <label>Código de proyecto<input
                            type="text"
                            value={selectedProject?.projectCode}
                            className="explore-project-card-projectCode"
                            readOnly/></label>
                        <label>Calle<input
                            type="text"
                            value={selectedProject?.address?.street}
                            className="explore-project-card-street"
                            readOnly
                        /></label>
                        <label>Numero<input
                            type="number"
                            value={selectedProject?.address?.number}
                            className="explore-project-card-street-number"
                            readOnly
                        /></label>
                        <label>Código postal<input
                            type="number"
                            value={selectedProject?.address?.postal}
                            className="explore-project-card-postal"
                            readOnly
                        /></label>
                        <label>Ciudad <input
                            type="text"
                            value={selectedProject?.address?.city}
                            className="explore-project-card-city"
                            readOnly
                        /></label>
                        <label>Provincia<input
                            type="text"
                            value={selectedProject?.address?.province}
                            className="explore-project-card-province"
                            readOnly
                        /></label>
                        <label>Código<input
                            type="text"
                            value={selectedProject?.code}
                            className="explore-project-card-code"
                            readOnly/></label>
                        <label>Comienzo<input
                            type="text"
                            value={selectedProject?.begin}
                            className="explore-project-card-begin"
                            readOnly/></label>
                        <label>Fin<input
                            type="text"
                            value={selectedProject?.end}
                            className="explore-project-card-end"
                            readOnly
                        /></label>
                        <label>Notas <input
                            type="text"
                            value={selectedProject?.notes}
                            className="explore-project-card-notes"
                            readOnly
                        /></label>
                        <button
                            onClick={() => setProjectEditable(true)}>Editar
                        </button>
                        <button onClick={deleteProject}>Borrar</button>
                    </div>
            }

        </div>
    );
}