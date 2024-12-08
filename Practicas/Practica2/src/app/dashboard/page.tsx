"use client"
import {useState, useEffect} from "react";
import {ClientData} from "@/interfaces/ClientDataTypes";
import ClientService from "@/services/Clients";
import {useRouter} from "next/navigation";


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

    const router = useRouter();

    const clientCreationRedirect = () => {
        router.push("/dashboard/createClient");
    }

    return (
        <div>
            <p>Soy un dashboard</p>

            <p> {clients.toString()}
            </p>
            {
                noClients ?
                    <button onClick={clientCreationRedirect}>Crea tu primer cliente!</button>
                    : <button onClick={clientCreationRedirect}>Crea tu otro cliente!</button>


            }
        </div>
    );
}