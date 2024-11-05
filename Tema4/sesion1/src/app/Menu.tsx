import Link from "next/link";

export default function Menu() {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </ul>
        </div>
    );
}