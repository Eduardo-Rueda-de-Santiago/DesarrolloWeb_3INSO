import HomeButton from "./HomeButton";
import '../styles/AdoptionForm.css';
import {useState} from "react";

function AdoptionForm({screenSetter, petData}) {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const changeName = (event) => {
        setName(event.target.value);
    };

    const changeSurname = (event) => {
        setSurname(event.target.value);
    };

    const changeEmail = (event) => {
        setEmail(event.target.value);
    };

    const changePhone = (event) => {
        setPhone(event.target.value);
    };

    const changeAddress = (event) => {
        setAddress(event.target.value);
    };

    const sendData = () => {
        const data = {
            name: name,
            surname: surname,
            email: email,
            phone: phone,
            address: address
        };

        console.log(data)
    }


    return (
        <div className={"AdoptForm"}>
            <HomeButton screenSetter={screenSetter}/>
            <h1 className={"AdoptionTitle"}>Adopta a {petData.nombre}, {name}</h1>

            <div className={"Display-Adoption"}>

                <div className={"Formulario"}>
                    <div className={"FormPart"}>
                        <label className={"FormLabel"}>Nombre:</label>
                        <input className={"FormInput"} type={"text"} placeholder={"nombre"} onChange={changeName}/>
                    </div>
                    <div className={"FormPart"}>

                        <label className={"FormLabel"}>Apellidos:</label>
                        <input className={"FormInput"} type={"text"} placeholder={"apellidos"}
                               onChange={changeSurname}/>
                    </div>

                    <div className={"FormPart"}>
                        <label className={"FormLabel"}>Email:</label>
                        <input className={"FormInput"} type={"email"} placeholder={"email"} onChange={changeEmail}/>
                    </div>

                    <div className={"FormPart"}>
                        <label className={"FormLabel"}>Teléfono:</label>
                        <input className={"FormInput"} type={"tel"} placeholder={"teléfono"} onChange={changePhone}/>
                    </div>

                    <div className={"FormPart"}>
                        <label className={"FormLabel"}>Dirección:</label>
                        <input className={"FormInput"} type={"text"} placeholder={"dirección"}
                               onChange={changeAddress}/>
                    </div>
                    <button className={"PersonDataSend"} onClick={sendData}>Adoptar</button>

                </div>


                <img className={"PetFullImage-AdoptionForm"} src={petData.imagen}/>

            </div>
        </div>
    );
}

export default AdoptionForm;