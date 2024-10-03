import {ReactElement} from "react";

function BotonSimple(): ReactElement {

    const handleClick = (event: any) => {
        console.log("Botón pulsado", event)
    }

    return (
        <div>
            <button onClick={handleClick}>Botón de prueba</button>
        </div>
    )

}

export default BotonSimple;