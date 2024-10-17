const {useState} = require('react');

function CondicionalTernario() {

    const [mostrar, setMostrar] = useState(false);

    const handleClick = () => {
        setMostrar(!mostrar);
    }

    return (
        <div>
            <button onClick={handleClick}>Mostrar/Ocultar</button>
            <h2>Título</h2>
            {mostrar && <p>Contenido oculto</p>}
        </div>
    );

}

export default CondicionalTernario;