import {useState} from "react";

function Contador({informResult}) {

    const [numero, setNumero] = useState(0);

    const handleClick = () => {
        setNumero(numero + 1);
    }

    const inform = () => {
        informResult(numero);
    }

    return (
        <div>
            <p>Clicks: {numero}</p>
            <button onClick={handleClick}>Sube contador</button>
            <button onClick={inform}>Informa resultado</button>
        </div>
    )
}


export default Contador;