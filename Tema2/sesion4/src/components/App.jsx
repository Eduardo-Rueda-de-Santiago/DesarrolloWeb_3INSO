/**
 * Libraries
 */
import {useState} from 'react';

/**
 * Components.
 */
import Login from './Login.jsx';
import Validator from "./Validator";

/**
 * Styles
 */
import '../styles/App.css';

function App() {

    const [loginData, setLoginData] = useState({});

    const receiveLoginData = (data) => {
        setLoginData(data);
    }

    return (
        <div className="App">
            <Login loginDataReceiver={receiveLoginData}/>
            <Validator loginData={loginData}/>
        </div>
    );
}

export default App;
