import SideMenu from "@/app/dashboard/SideMenu";
import "./SideMenu.css";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <SideMenu/>
        <div className={"Side-menu-margin"}>
            {children}
        </div>
        </body>
        </html>
    );
}
