import Home from "./Home";
import '../styles/HomeButton.css';


function HomeButton({screenSetter}) {
    return (
        <button className={"HomeButton"} onClick={() => screenSetter(<Home screenSetter={screenSetter}/>)}>
            Home
        </button>
    )
}

export default HomeButton;