import {useState} from 'react'

function EligeBoton() {

    let [mensaje, setMensaje] = useState('');
    const handleClick = (num) => {
        mensaje = `Has elegido el botón ${num}`
        setMensaje(mensaje)
    }


    return (
        <div>
            <h2>Elige un botón</h2>
            <p>{mensaje}</p>
            <button onClick={event => handleClick(1)}>Boton 1</button>
            <button onClick={event => handleClick(2)}>Boton 2</button>
            <button onClick={event => handleClick(3)}>Boton 3</button>
        </div>
    );

}

export default EligeBoton;