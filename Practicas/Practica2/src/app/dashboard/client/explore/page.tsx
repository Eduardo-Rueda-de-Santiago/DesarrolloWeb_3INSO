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
    const [clientEditable, setClientEditable] = useState<Boolean>(false);

    const loadClients = () => {
        clientService.getClients()
            .then((res) => {
                if (res.length > 0) setNoClients(false);
                setClients(res);
            })
    }

    const updateClient = () => {
        if (selectedClient) {
            clientService.updateClient(selectedClient)
                .then(() => {
                    loadClients();
                })
        }
    }

    const deleteClient = () => {
        if (selectedClient) {
            clientService.deleteClient(selectedClient)
                .then((res) => {
                    console.log(res)
                    loadClients();
                });
        }
    };

    const changeSelectedClient = (client: ClientData) => {
        setClientEditable(false);
        setSelectedClient(client);
    }

    useEffect(() => {
        loadClients();
    }, []);

    const router = useRouter();

    const clientCreationRedirect = () => {
        router.push("/dashboard/client/create");
    }

    return (

        <div className={"explore-client-component"}>

            <h2 className={'explore-client-titulo'}>Ver clientes</h2>


            <div className={"explore-client-list"}>
                {clients.map((client) => <ClientListItems client={client} setSelectedClient={changeSelectedClient}/>)}

            </div>
            {
                noClients ?
                    <button className={"explore-client-create-button"} onClick={clientCreationRedirect}>Crea tu primer
                        cliente!</button>
                    : <button className={"explore-client-create-button"} onClick={clientCreationRedirect}>Crea otro
                        cliente!</button>

            }
            {
                selectedClient &&
                clientEditable ?
                    <div className={"explore-client-card"}>
                        <input
                            type="text"
                            value={selectedClient?.name}
                            className="explore-client-card-title"

                        />
                        <input
                            type="text"
                            value={selectedClient?.cif}
                            className="explore-client-card-cif"

                        />
                        <input
                            type="text"
                            value={selectedClient?.address?.street}
                            className="explore-client-card-street"

                        />
                        <input
                            type="text"
                            value={selectedClient?.address?.number}
                            className="explore-client-card-street-number"

                        />
                        <input
                            type="text"
                            value={selectedClient?.address?.postal}
                            className="explore-client-card-postal"

                        />
                        <input
                            type="text"
                            value={selectedClient?.address?.city}
                            className="explore-client-card-city"

                        />
                        <input
                            type="text"
                            value={selectedClient?.address?.province}
                            className="explore-client-card-province"

                        />
                        <button onClick={() => updateClient()}>Salvar</button>
                        <button onClick={deleteClient}>Borrar</button>
                    </div>
                    :
                    <div className={"explore-client-card"}>
                        <input
                            type="text"
                            value={selectedClient?.name}
                            className="explore-client-card-title"
                            readOnly
                        />
                        <input
                            type="text"
                            value={selectedClient?.cif}
                            className="explore-client-card-cif"
                            readOnly
                        />
                        <input
                            type="text"
                            value={selectedClient?.address?.street}
                            className="explore-client-card-street"
                            readOnly
                        />
                        <input
                            type="text"
                            value={selectedClient?.address?.number}
                            className="explore-client-card-street-number"
                            readOnly
                        />
                        <input
                            type="text"
                            value={selectedClient?.address?.postal}
                            className="explore-client-card-postal"
                            readOnly
                        />
                        <input
                            type="text"
                            value={selectedClient?.address?.city}
                            className="explore-client-card-city"
                            readOnly
                        />
                        <input
                            type="text"
                            value={selectedClient?.address?.province}
                            className="explore-client-card-province"
                            readOnly
                        />
                        <button onClick={() => setClientEditable(true)}>Editar</button>
                        <button onClick={deleteClient}>Borrar</button>
                    </div>


            }

        </div>
    );
}