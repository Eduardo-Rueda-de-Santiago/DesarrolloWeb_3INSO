"use client"

import Link from "next/link";

export default function LoginButton() {
    return (
        <Link
            href='/auth/login'
            className={'home-page-button login-button'}
        >Login
        </Link>
    );
}