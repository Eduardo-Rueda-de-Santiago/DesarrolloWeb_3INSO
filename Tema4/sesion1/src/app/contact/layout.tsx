import Link from "next/link";

export default function ContactLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <>
            <nav>
                <Link href={'/contact/book'}>Book</Link>
            </nav>
            {children}
            <footer>My contact footer</footer>
        </>
    );
}
