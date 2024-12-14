"use client"

import Link from "next/link";

export default function RegisterButton() {
    return (
        <Link
            href='/auth/register'
            className={'home-page-button register-button'}
        >Register
        </Link>
    );
}