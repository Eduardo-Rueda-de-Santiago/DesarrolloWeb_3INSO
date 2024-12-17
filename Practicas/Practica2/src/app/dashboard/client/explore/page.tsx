"use client"
import ClientService from "@/services/Clients";
import {useEffect, useState} from "react";
import {ClientData} from "@/interfaces/ClientDataTypes";
import {useRouter} from "next/navigation";

export default function ExploreClientPage() {

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