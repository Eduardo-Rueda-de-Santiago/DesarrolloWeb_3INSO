import {useState} from "react";

function ListaPersonas() {

    const [personas, setPersonas] = useState([
        {nombre: 'Pedro', apellido: 'Rodriguez', email: 'pepo@gmail.com'},
        {nombre: 'Juan', apellido: 'Perez', email: 'juan@gmail.com'},
        {nombre: 'Maria', apellido: 'Gonzalez', email: 'maria@gmail.com'},
        {nombre: 'Ana', apellido: 'Lopez', email: 'ana@gmail.com'}
    ]);

    const borrarPersona = (index) => {
        const personasCP = [...personas];
        personasCP.splice(index, 1);
        setPersonas(personasCP);
    }
    const modificaNombre = (index, event) => {
        const persona = personas[index];
        persona.nombre = event.target.value;
        const personasNew = [...personas];
        personasNew[index] = persona;
        setPersonas(personasNew);
    }

    return (
        <div>
            <h2>Lista de personas</h2>
            <ul>
                {personas.map((persona, index) => (
                    <li key={index}>
                        <input type="text" value={persona.nombre} onChange={(event) => modificaNombre(index, event)}/>
                        {persona.apellido} - {persona.email}
                        <button onClick={() => borrarPersona(index)}>Borrar</button>
                    </li>
                ))}
            </ul>
            <p>Data</p>
            <ol>
                {personas.map((persona, index) => (
                    <li key={index}>
                        {persona.nombre} - {persona.apellido} - {persona.email}
                    </li>
                ))}
            </ol>
        </div>);
}

export default ListaPersonas;