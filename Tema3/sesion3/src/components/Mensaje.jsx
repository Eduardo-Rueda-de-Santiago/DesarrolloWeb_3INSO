import {useEffect, useState} from "react";

function Mensaje() {
    const [num, setNum] = useState(0);
    const [mensaje, setMensaje] = useState('Mensaje inicial');
    useEffect(() => {
        console.log('[Mensaje] useEffect');
    }, [mensaje]);
    return (
        <div>
            <p>{mensaje}</p>
            <p>{num}</p>
            <button onClick={() => setNum(num + 1)}>Aumenta</button>
            <input type="text" onChange={(e) => setMensaje(e.target.value)}/>
        </div>
    );
}

export default Mensaje;