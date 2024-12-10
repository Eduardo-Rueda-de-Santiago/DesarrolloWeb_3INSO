"use client"
import {useState, useEffect} from "react";
import {ClientData} from "@/interfaces/ClientDataTypes";
import ClientService from "@/services/Clients";


export default function Dashboard() {

    const clientService = new ClientService()

    const [clients, setClients] = useState<ClientData[]>([]);
    const [noClients, setNoClients] = useState<Boolean>(true);

    useEffect(() => {
        clientService.getClients()
            .then((res) => {
                if (res.length > 0) setNoClients(false);
                setClients(res);
            })
    }, []);
    return (
        <div>
            <p>Soy un dashboard</p>

            <p> {clients.toString()}
            </p>
            {
                noClients && <p>Crea tu primer cliente!</p>
            }
        </div>
    );
}