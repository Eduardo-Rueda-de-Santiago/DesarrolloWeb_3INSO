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
                        <input
                            type="text"
                            value={selectedProject?.name}
                            className="explore-project-card-title"
                            onChange={(e) => setSelectedProject({...selectedProject, name: e.target.value})}
                        />
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    value={selectedProject?.cif}*/}
                        {/*    className="explore-project-card-cif"*/}
                        {/*    onChange={(e) => setSelectedClient({...selectedProject, cif: e.target.value})}*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    value={selectedProject?.address?.street}*/}
                        {/*    className="explore-project-card-street"*/}
                        {/*    onChange={(e) => setSelectedClient({*/}
                        {/*        ...selectedProject,*/}
                        {/*        address: {...selectedProject.address, street: e.target.value}*/}
                        {/*    })}*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*    type="number"*/}
                        {/*    value={selectedClient?.address?.number}*/}
                        {/*    className="explore-project-card-street-number"*/}
                        {/*    onChange={(e) => setSelectedClient({*/}
                        {/*        ...selectedClient,*/}
                        {/*        address: {...selectedClient.address, number: e.target.value}*/}
                        {/*    })}*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*    type="number"*/}
                        {/*    value={selectedClient?.address?.postal}*/}
                        {/*    className="explore-project-card-postal"*/}
                        {/*    onChange={(e) => setSelectedClient({*/}
                        {/*        ...selectedClient,*/}
                        {/*        address: {...selectedClient.address, postal: e.target.value}*/}
                        {/*    })}*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    value={selectedClient?.address?.city}*/}
                        {/*    className="explore-project-card-city"*/}
                        {/*    onChange={(e) => setSelectedClient({*/}
                        {/*        ...selectedClient,*/}
                        {/*        address: {...selectedClient.address, city: e.target.value}*/}
                        {/*    })}*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    value={selectedClient?.address?.province}*/}
                        {/*    className="explore-project-card-province"*/}
                        {/*    onChange={(e) => setSelectedClient({*/}
                        {/*        ...selectedClient,*/}
                        {/*        address: {...selectedClient.address, province: e.target.value}*/}
                        {/*    })}*/}
                        {/*/>*/}
                        <button onClick={updateProject}>Salvar</button>
                        <button onClick={deleteProject}>Borrar</button>
                    </div>
                    :
                    <div className={"explore-project-card"}>
                        <input
                            type="text"
                            value={selectedProject?.name}
                            className="explore-project-card-title"
                            readOnly
                        />
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    value={selectedClient?.cif}*/}
                        {/*    className="explore-project-card-cif"*/}
                        {/*    readOnly*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    value={selectedClient?.address?.street}*/}
                        {/*    className="explore-project-card-street"*/}
                        {/*    readOnly*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    value={selectedClient?.address?.number}*/}
                        {/*    className="explore-project-card-street-number"*/}
                        {/*    readOnly*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    value={selectedClient?.address?.postal}*/}
                        {/*    className="explore-project-card-postal"*/}
                        {/*    readOnly*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    value={selectedClient?.address?.city}*/}
                        {/*    className="explore-project-card-city"*/}
                        {/*    readOnly*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*    type="text"*/}
                        {/*    value={selectedClient?.address?.province}*/}
                        {/*    className="explore-project-card-province"*/}
                        {/*    readOnly*/}
                        {/*/>*/}
                        <button onClick={() => setProjectEditable(true)}>Editar</button>
                        <button onClick={deleteProject}>Borrar</button>
                    </div>


            }

        </div>
    );
}