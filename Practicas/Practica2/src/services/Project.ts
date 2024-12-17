import UserService from "@/services/User";
import {ProjectData} from "@/interfaces/ProjectDataTypes";
import {ProjectsNotFetchedError} from "@/exceptions/ProjectExceptions";

/**
 * Clase para interactuar con los proyectos en la API
 */
export default class ProjectService {

    constructor() {
    }

    /**
     * Obtiene una lista con todos los proyectos del cliente.
     */
    async getClientProjects(clientId: string): Promise<ProjectData[]> {

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            }
        }

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/project?`
            + new URLSearchParams({
                client: clientId
            }).toString(),
            options
        )
            .then(res => {
                if (!res.ok) {
                    throw new ProjectsNotFetchedError();
                }
                return res.json()
            })
    }

    async getAllProjects(): Promise<ProjectData[]> {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            }
        }

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/`,
            options
        )
            .then(res => {
                if (!res.ok) {
                    throw new ProjectsNotFetchedError();
                }
                return res.json()
            })
    }

    /**
     * Crea un proyecto
     * @param projectData Datos del cliente a crear
     */
    async createProject(projectData: ProjectData): Promise<ProjectData> {

        const {_id, ...projectDataWithoutId} = projectData;


        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            },
            body: JSON.stringify(projectDataWithoutId)
        }

        console.log(options, options)

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/project`,
            options
        ).then(res => res.json());
    }

    /**
     * Actualiza un proyecto
     * @param projectData Datos del cliente a actualizar
     */
    async updateProject(projectData: ProjectData): Promise<ProjectData> {

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            },
            body: JSON.stringify(projectData)
        }

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/client/?`
            + new URLSearchParams({
                id: projectData._id
            }).toString(),
            options
        ).then(res => res.json());
    }

    /**
     * Borra un proyecto
     * @param projectData Datos del proyecto a borrar
     */
    async deleteProject(projectData: ProjectData): Promise<ProjectData> {

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${new UserService().getClientToken()}`
            }
        }

        return fetch(
            `${process.env["NEXT_PUBLIC_API_URL"]}/project/?`
            + new URLSearchParams({
                id: projectData._id
            }).toString(),
            options
        ).then(res => res.json());
    }


}