import {useState} from "react";

function Login({loginDataReceiver}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const assembleLoginData = () => {
        return {
            email: email,
            password: password,
        };
    }

    return (
        <div>
            <div>
                <label>Email: </label>
                <input name="email" type="email" placeholder="someone@example.com" onChange={event => {
                    setEmail(event.target.value)
                }}/>
            </div>
            <div>
                <label>Password: </label>
                <input name="password" type="password" placeholder="Password" onChange={event => {
                    setPassword(event.target.value)
                }}/>
            </div>
            <button onClick={() => {
                loginDataReceiver(assembleLoginData())
            }}>Login
            </button>
        </div>
    );
}

export default Login;