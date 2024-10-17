import {useState} from "react";

function Filter({filterSetter, petData}) {

    const [tipo, setTipo] = useState("perro");
    const [edad, setEdad] = useState("cachorro");

    filterSetter({tipo, edad});

    return (
        <div>
            <p>Buscador</p>
            <select onChange={(e) => setTipo(e.target.value)}>
                <option value={null}>No filtrar</option>
                <option value="perro">Perro</option>
                <option value="gato">Gato</option>
            </select>

        </div>
    )
}

export default Filter;