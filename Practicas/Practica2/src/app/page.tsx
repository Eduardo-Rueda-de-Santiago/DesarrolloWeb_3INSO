import './homeScreen.css'
import LoginButton from "@/app/LoginButton";
import RegisterButton from "@/app/RegisterButton";

export default function Home() {

    return (
        <div className={'home-screen-root'}>
            <h1 className={'home-page-title'}>Zo Sale</h1>
            <h2 className={'home-page-function'}>Acceder</h2>
            <LoginButton/>
            <RegisterButton/>
        </div>
    );
}
