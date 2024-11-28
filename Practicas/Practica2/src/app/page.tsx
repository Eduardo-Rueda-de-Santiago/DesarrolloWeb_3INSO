"use client"

import './homeScreen.css'
import Link from 'next/link';

export default function Home() {

    return (
        <div className={'home-screen-root'}>

            <h1 className={'home-page-title'}>Zo Sale</h1>

            <h2 className={'home-page-function'}>Acceder</h2>

            <Link
                href='/login'
                className={'home-page-button login-button'}
            >Login
            </Link>

            <Link
                href='/register'
                className={'home-page-button register-button'}
            >Register
            </Link>

        </div>
    );
}
