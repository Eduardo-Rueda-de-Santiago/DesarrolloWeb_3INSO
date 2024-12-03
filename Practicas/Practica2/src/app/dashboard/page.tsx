"use client"
import UserService from "@/services/User";
import {useEffect} from "react";


export default function Dashboard() {

    useEffect(() => {
        // console.log("Token is:", new UserService().getToken())

    }, [])
    return (
        <div>
            <p>Soy un dashboard</p>
        </div>
    );
}