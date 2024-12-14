import SideMenu from "@/app/dashboard/SideMenu";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <SideMenu/>
        {children}
        </body>
        </html>
    );
}
