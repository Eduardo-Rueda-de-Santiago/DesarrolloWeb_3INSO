import '../style/Tarjeta.css'

function Tarjeta(args) {
    console.log(args.nombre);
    return (
        <div className="Tarjeta">
            <h2 className="Nombre">{args.nombre}</h2>
            <div className="Datos">
                <p>{args.cargo}</p>
                <p>{args.email}</p>
                <p>{args.telefono}</p>
                <br/>
            </div>
        </div>
    )
}

export default Tarjeta;