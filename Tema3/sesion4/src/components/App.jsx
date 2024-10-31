import '../styles/App.css';
import FormularioRegistro from "./FormularioRegistro";
import {useState} from "react";

function App() {

    const [formData, setFormData] = useState({})

    const [formComplete, setFormComplete] = useState(false);

    const addFormPart = (formPartName, formPart) => {

        const formDataCopy = formData;
        formDataCopy[formPartName] = formPart;
        setFormData(formDataCopy);

    }
    const sendData = () => {

        try {

            fetch('myApi', {

                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(formData)

            })
                .then((response) => {

                    if (response.status === 404) {

                        console.log("URL NOT FOUND");
                        console.log(formData);

                    }

                    console.log(response);
                });

        } catch (error) {

            console.log("REQUEST FAILED");
            console.log(formData);

        }
    }

    const finishForm = () => {
        setFormComplete(true);
        sendData();
    }

    const changeFormScreen = (newFormScreen) => {
        setFormScreen(newFormScreen);
    }


    const [formScreen, setFormScreen] = useState(<FormularioRegistro
        addFormData={addFormPart}
        finishForm={finishForm}
        changeFormScreen={changeFormScreen}
    />);


    return (
        <div className="App">
            <h1>Gimnasio 123</h1>
            {formScreen}
            {
                formComplete && <p>Gracias por registrarte!</p>
            }
        </div>
    );
}

export default App;
