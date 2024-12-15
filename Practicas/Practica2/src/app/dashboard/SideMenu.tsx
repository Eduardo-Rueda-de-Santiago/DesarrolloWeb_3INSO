"use client"

import Link from "next/link";
import "./SideMenu.css";
import UserService from "@/services/User";
import {useRouter} from "next/navigation";

export default function SideMenu() {

    const router = useRouter();


    const logout = () => {
        new UserService().logout().then(() => {
            router.push("/");
        });
    }
    return (
        <div className={"Side-menu"}>

            <h1 className={"side-menu-title"}>ZoSale</h1>
            <div className={"side-menu-explorer"}>
                <div className={"side-menu-navigation-category"}>
                    <h3>Clientes</h3>
                    <div className={"side-menu-link-container"}>
                        <Link
                            href='/dashboard/client/explore'
                            className={'side-menu-link'}
                        >
                            Explorar
                        </Link>
                        <Link
                            href='/dashboard/client/create'
                            className={'side-menu-link'}
                        >
                            Crear
                        </Link>
                    </div>
                </div>
                <div className={"side-menu-navigation-category"}>
                    <h3>Proyectos</h3>
                    <div className={"side-menu-link-container"}>

                        <Link
                            href='/dashboard/project/explore'
                            className={'side-menu-link'}
                        >
                            Explorar
                        </Link>

                        <Link
                            href='/dashboard/project/create'
                            className={'side-menu-link'}
                        >
                            Crear
                        </Link>

                    </div>
                </div>
                <div className={"side-menu-navigation-category"}>
                    <h3>Albaranes</h3>
                    <div className={"side-menu-link-container"}>

                        <Link
                            href='/dashboard/deliveryNote/explore'
                            className={'side-menu-link'}
                        >
                            Explorar
                        </Link>

                        <Link
                            href='/dashboard/deliveryNote/create'
                            className={'side-menu-link'}
                        >
                            Crear
                        </Link>
                    </div>
                </div>
            </div>

            <button onClick={logout} className={'side-menu-logout-button'}>Logout</button>

        </div>
    );
}