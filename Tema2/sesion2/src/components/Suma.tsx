import {useState} from "react";

function Suma({num1, num2}) {

    const [result, setResult] = useState(['']);

    const operar = () => {
        setResult(num1 + num2);
    }
    return (
        <div>
            <h2>Suma</h2>
            <button onClick={operar}>Realizar suma
            </button>
            <p>La suma de {num1} y {num2} es {result}</p>
        </div>
    )
}


export default Suma;