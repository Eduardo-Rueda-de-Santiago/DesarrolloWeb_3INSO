import {useState, useEffect} from "react";
import {SuccessfulLoginMessage, FailedLoginMessage} from "./Messages";

function Validator({loginData}) {

    const [databaseData, setDatabaseData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setDatabaseData(data);
            })
    }, []);

    return databaseData.filter((user) =>
        (user.email === loginData.email) &&
        (user.username === loginData.password)
    ).length > 0 ?
        (<SuccessfulLoginMessage loginData={loginData}/>) :
        (<FailedLoginMessage loginData={loginData}/>);

}

export default Validator;