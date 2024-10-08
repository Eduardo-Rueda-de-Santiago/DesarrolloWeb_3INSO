import {useState} from 'react'

function Form({sendMethod}) {

    const [data, setData] = useState({
        nombre: '',
        apellidos: '',
        edad: 0
    });

    const handleChange = (event, field) => {
        setData({
            ...data,
            [field]: event.target.value
        });
    };

    return (
        <div>
            <div>
                <p>{data.nombre}</p>
                <p>{data.apellidos}</p>
                <p>{data.edad}</p>
            </div>
            <div>
                <label>Nombre</label>
                <input type="text" onChange={event => {
                    handleChange(event, 'nombre')
                }}/>
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" onChange={event => {
                    handleChange(event, 'apellidos')
                }}/>
            </div>
            <div>
                <label>Edad</label>
                <input type="number" onChange={event => {
                    handleChange(event, 'edad')
                }}/>
            </div>
            <button onClick={() => sendMethod(data)}>Enviar</button>
        </div>
    );
}

export default Form;