"use client"
import ClientService from "@/services/Clients";
import {useEffect, useState} from "react";
import {ClientData} from "@/interfaces/ClientDataTypes";
import {useRouter} from "next/navigation";
import "./style.css"

function ClientListItems(props: { client: ClientData, setSelectedClient: (client: ClientData) => void }) {

    const client: ClientData = props.client;
    const updateSelectedClient = () => {
        props.setSelectedClient(client);
    };

    return (
        <div onClick={updateSelectedClient} key={client._id} className={"explore-client-list-element"}>
            <h3>{client.name}</h3>
            <p>{client.cif}</p>
        </div>
    );

}

export default function ExploreClientPage() {

    const clientService = new ClientService()

    const [clients, setClients] = useState<ClientData[]>([]);
    const [noClients, setNoClients] = useState<Boolean>(true);
    const [selectedClient, setSelectedClient] = useState<ClientData | null>(null);

    useEffect(() => {
        clientService.getClients()
            .then((res) => {
                if (res.length > 0) setNoClients(false);
                setClients(res);
            })
    }, []);

    const router = useRouter();

    const clientCreationRedirect = () => {
        router.push("/dashboard/client/create");
    }

    return (

        <div className={"explore-client-component"}>

            <h2 className={'explore-client-titulo'}>Ver clientes</h2>


            <div className={"explore-client-list"}>
                {clients.map((client) => <ClientListItems client={client} setSelectedClient={setSelectedClient}/>)}
                {
                    noClients ?
                        <button onClick={clientCreationRedirect}>Crea tu primer cliente!</button>
                        : <button onClick={clientCreationRedirect}>Crea otro cliente!</button>


                }
            </div>
            {selectedClient && <div className={"explore-client-card"}>
                <p>{String(selectedClient?.name)}</p>
            </div>}

        </div>
    );
}