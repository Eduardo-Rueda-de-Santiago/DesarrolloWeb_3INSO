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
            <div className={"side-menu-explorer"}>
                <div>
                    <h3>Clientes</h3>
                    <ul>
                        <li>
                            <Link
                                href='/dashboard/client/explore'
                                className={''}
                            >
                                Explorar
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/dashboard/client/create'
                                className={''}
                            >
                                Crear
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Proyectos</h3>
                    <ul>
                        <li>
                            <Link
                                href='/dashboard/project/explore'
                                className={''}
                            >
                                Explorar
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/dashboard/project/create'
                                className={''}
                            >
                                Crear
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Albaranes</h3>
                    <ul>
                        <li>
                            <Link
                                href='/dashboard/deliveryNote/explore'
                                className={''}
                            >
                                Explorar
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/dashboard/deliveryNote/create'
                                className={''}
                            >
                                Crear
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <button onClick={logout} className={'logout-button'}>Logout</button>

        </div>
    );
}