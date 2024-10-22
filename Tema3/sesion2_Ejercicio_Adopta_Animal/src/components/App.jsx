import {useState, useEffect} from "react";

import Home from "./Home";

function App() {

    const [screen, setScreen] = useState(<p>Loading</p>);

    const screenSetter = (screen) => {
        setScreen(screen);
    }

    useEffect(() => {
        setScreen(<Home screenSetter={screenSetter}/>);
    }, []);


    return (
        <div>
            {screen}
        </div>
    );

}

export default App;
