import {useState} from 'react'

function Suma({num1, num2, sumaResuelta}) {

    const [resultado, setResultado] = useState(0);

    const handleClick = () => {

        const resultado = num1 + num2;
        setResultado(resultado);
        sumaResuelta(resultado);

    };

    return (
        <div>
            <h2>Suma</h2>
            <button onClick={handleClick}>Calcula el resultado</button>
            <p>El resultado de la suma de {num1} y {num2} es {resultado}</p>
        </div>
    )

}

export default Suma;