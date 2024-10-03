import '../style/Tarjeta.css'

function Tarjeta(props) {
    console.log(props.nombre);
    return {
        "datos": 23,
        "html": (
            <div className="Tarjeta">
                <h2 className="Nombre">{props.nombre}</h2>
                <div className="Datos">
                    <p>{props.cargo}</p>
                    <p>{props.email}</p>
                    <p>{props.telefono}</p>
                    <br/>
                </div>
            </div>
        )
    }
}

export default Tarjeta;